import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { sigInEmailPassword } from './auth/actions/auth-actions';
import prisma from './lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'user@google.com' },
        password: { label: 'Password', type: 'password', placeholder: '********' },
      },
      authorize: async (credentials) => {
        const user = await sigInEmailPassword(credentials.email as string, credentials.password as string);

        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user }) {
      // if (account.provider === 'google' || account.provider === 'github') {
      //   user.email = profile.email;
      // }
      // return true;
      console.log(user);
      return true;
    },
    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? 'no-email' },
      });

      console.log({ dbUser });
      token.roles = dbUser?.roles ?? ['no-roles'];
      token.id = dbUser?.id ?? 'no-uuid';

      return token;
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user.roles = token.roles as string[];
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
