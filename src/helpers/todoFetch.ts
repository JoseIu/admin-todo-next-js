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

  return todo;
};
export const todoFetchCreate = async (description: string): Promise<TodoI> => {
  const body = { description };

  const todoUpdated = await fetch(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const todo = await todoUpdated.json();

  return todo;
};

export const deleteTodosCompletedFetch = async (): Promise<TodoI> => {
  const todoUpdated = await fetch(`/api/todos`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const todo = await todoUpdated.json();

  return todo;
};
