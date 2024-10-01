import { createTodoSchema } from '@/dtos/createTodoSchema';
import prisma from '@/lib/prisma';
import { getUserServerSession } from '@/todos/actions/todo-actions';
import responseCliente from '@/utils/responseClient';
import { type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const user = await getUserServerSession();
  if (!user) return responseCliente(401, null, 'Unauthorized');
  const take = Number(searchParams.get('take') ?? 10);
  const skip = Number(searchParams.get('skip') ?? 0);

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
    where: { userId: user.id },
  });

  return responseCliente(200, todos, 'Todos fetched successfully');
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const user = await getUserServerSession();
  if (!user) return responseCliente(401, null, 'Unauthorized');

  const isValidDTO = createTodoSchema.safeParse(body);
  const messageError = isValidDTO.error?.errors.map((error) => error.message).join(', ');

  if (!isValidDTO.success) return responseCliente(400, null, messageError!);

  const { description, completed } = isValidDTO.data;

  const todo = await prisma.todo.create({ data: { description, completed, userId: user.id! } });

  return responseCliente(200, todo, 'Todo created successfully');
};

export const DELETE = async () => {
  const user = await getUserServerSession();
  if (!user) return responseCliente(401, null, 'Unauthorized');
  try {
    const todosDeleted = await prisma.todo.deleteMany({ where: { completed: true, userId: user.id } });

    console.log(todosDeleted);

    return responseCliente(200, null, 'Todos completed deleted successfully');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return responseCliente(500, null, 'Internal server error');
  }
};
