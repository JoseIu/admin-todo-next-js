'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { IoLogOutOutline } from 'react-icons/io5';

export const LogoutButton = () => {
  const { status } = useSession();

  if (status === 'loading') {
    return (
      <button className="p-2 flex items-center gap-2">
        <IoLogOutOutline size={30} />
        <span>Wait....</span>
      </button>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <button className="p-2 flex items-center gap-2" onClick={() => signIn()}>
        <IoLogOutOutline size={30} />
        <span>Login</span>
      </button>
    );
  }
  return (
    <button className="p-2 flex items-center gap-2" onClick={() => signOut()}>
      <IoLogOutOutline size={30} />
      <span>Log out</span>
    </button>
  );
};
