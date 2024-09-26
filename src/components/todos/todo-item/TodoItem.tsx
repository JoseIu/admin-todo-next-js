'use client';
import { TodoI } from '@/interfaces/Todo.interface';

type Props = {
  todo: TodoI;
  toggleTodo: (id: string, completed: boolean) => void;
};

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const isCompleted = todo.completed && 'line-through text-textGray decoration-todoDone';
  return (
    <article
      className={`p-4 rounded-md bg-blueSemiDark ${isCompleted}`}
      onClick={() => toggleTodo(todo.id, !todo.completed)}
    >
      <h2>{todo.description}</h2>
    </article>
  );
};
