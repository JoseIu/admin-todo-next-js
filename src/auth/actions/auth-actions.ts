import prisma from '@/lib/prisma';
import bcrypy from 'bcryptjs';

export const sigInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = await createUsers(email, password);
    return dbUser;
  }

  if (!bcrypy.compareSync(password, user.password ?? '')) {
    return null;
  }

  return user;
};

const createUsers = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: { email, password: bcrypy.hashSync(password), name: email.split('@')[0] },
  });

  return user;
};
