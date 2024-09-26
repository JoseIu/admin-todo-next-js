'use client';

import { useState } from 'react';

export const NewTodo = () => {
  const [showForm, setShowFrom] = useState(false);
  const [todo, setTodo] = useState('');
  const isActiveForm = showForm ? 'opacity-100' : 'opacity-0 pointer-events-none';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todo) return;
    console.log(todo);
  };

  return (
    <div className="w-full p-4 flex items-center justify-between">
      <form onSubmit={handleSubmit} className={`flex items-center gap-3 ${isActiveForm} `}>
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

      <button className="py-2 px-4 bg-btnColor rounded-3xl" onClick={() => setShowFrom(!showForm)}>
        {showForm ? 'Cancel' : 'New todo'}
      </button>
    </div>
  );
};
