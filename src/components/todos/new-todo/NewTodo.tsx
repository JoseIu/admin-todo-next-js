'use client';

import { deleteTodosCompletedFetch, todoFetchCreate } from '@/helpers/todoFetch';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const NewTodo = () => {
  const [showForm, setShowFrom] = useState(false);
  const [todo, setTodo] = useState('');
  const router = useRouter();
  const isActiveForm = showForm ? 'opacity-100' : 'opacity-0 pointer-events-none';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todo.trim()) return;
    await todoFetchCreate(todo.trim());
    setTodo('');
    router.refresh();
  };
  const handleDeleteTodosCompleted = async () => {
    await deleteTodosCompletedFetch();
    router.refresh();
  };

  return (
    <div className="w-full p-4 flex items-center justify-between">
      <form
        onSubmit={handleSubmit}
        className={`flex items-center gap-3 ${isActiveForm} transition-opacity duration-150 `}
      >
        <input
          className="bg-blueDark py-2 px-4 rounded-md"
          type="text"
          name="add-todo"
          id="add-todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button className="bg-backgroundFocus py-2 px-4 rounded-2xl" type="submit">
          add
        </button>
      </form>

      <div>
        <button className="py-2 px-4 bg-btnColor rounded-3xl" onClick={() => setShowFrom(!showForm)}>
          {showForm ? 'Cancel' : 'New todo'}
        </button>
        <button onClick={handleDeleteTodosCompleted}>Delete completed</button>
      </div>
    </div>
  );
};
