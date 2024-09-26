import { TodoI } from '@/interfaces/Todo.interface';

export const todoFetch = async (id: string, completed: boolean): Promise<TodoI> => {
  const body = { completed };

  const todoUpdated = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const todo = await todoUpdated.json();

  console.log(todo);

  return todo;
};
