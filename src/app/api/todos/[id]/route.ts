import prisma from '@/lib/prisma';
import { getUserServerSession } from '@/todos/actions/todo-actions';
import responseCliente from '@/utils/responseClient';
import { NextRequest } from 'next/server';

interface Segments {
  params: {
    id: string;
  };
}

export const GET = async (request: NextRequest, segments: Segments) => {
  const { id } = segments.params;
  const user = await getUserServerSession();
  if (!user) return responseCliente(401, null, 'Unauthorized');

  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) return responseCliente(404, null, 'Todo not found');
  if (todo.id !== user.id) return responseCliente(401, null, 'Unauthorized');

  return responseCliente(200, todo, 'Todos fetched successfully');
};

export const PUT = async (request: NextRequest, segments: Segments) => {
  const { id } = segments.params;

  const findTodo = await prisma.todo.findMany({ where: { id } });

  if (!findTodo) return responseCliente(404, null, 'Todo not found');

  const body = await request.json();

  const updateTodo = await prisma.todo.update({ where: { id }, data: body });

  return responseCliente(200, updateTodo, 'Todo updated successfully');
};
