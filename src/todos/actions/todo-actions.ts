'use server';

import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const getUserServerSession = async () => {
  const session = await auth();
  return session?.user;
};

export const toggelTodo = async (id: string, completed: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Tododo with id ${id} not found`;
  }

  const updatedTodo = await prisma.todo.update({ where: { id }, data: { completed } });

  revalidatePath('/app/dashboard/server-todos');

  return updatedTodo;
};

export const addTodo = async (description: string) => {
  const session = await auth();
  const userId = session!.user!.id!;
  try {
    const newTodo = await prisma.todo.create({ data: { description, userId } });
    revalidatePath('/app/dashboard/server-todos');

    return newTodo;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      error: 'Error creating todo',
    };
  }
};

export const deleteTodosCompleted = async () => {
  try {
    await prisma.todo.deleteMany({ where: { completed: true } });
    return revalidatePath('/app/dashboard/server-todos');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      error: 'Error deleting todos',
    };
  }
};
