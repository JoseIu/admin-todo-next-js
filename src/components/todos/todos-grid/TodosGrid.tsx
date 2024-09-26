'use client';

import { todoFetch } from '@/helpers/todoFetch';
import { TodoI } from '@/interfaces/Todo.interface';
import { useRouter } from 'next/navigation';
import { TodoItem } from '../todo-item/TodoItem';

type Props = {
  todos: TodoI[];
};

export const TodosGrid = ({ todos }: Props) => {
  const router = useRouter();
  const onHandleToggleTodo = async (id: string, completed: boolean) => {
    const updatedTodo = await todoFetch(id, completed);
    console.log({ updatedTodo });

    router.refresh();
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
      {!todos.length ? (
        <span>No tienes todos</span>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={onHandleToggleTodo} />)
      )}
    </div>
  );
};
