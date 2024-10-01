import prisma from '@/lib/prisma';
import bcrypy from 'bcryptjs';

export const GET = async () => {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypy.hashSync('123456'),
      roles: ['admin', 'client', 'super-user'],
      todos: {
        create: [
          { description: 'Piedra del alma', completed: true },
          { description: 'Piedra del poder' },
          { description: 'Piedra del tiempo' },
          { description: 'Piedra del espacio' },
          { description: 'Piedra de la realidad' },
        ],
      },
    },
  });
  return Response.json({ message: 'Seeed Excuted', user });
};
