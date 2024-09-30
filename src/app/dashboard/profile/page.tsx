'use client';

import { useSession } from 'next-auth/react';

const ProfilePage = () => {
  const { data } = useSession();
  return (
    <section>
      <h3 className="text-3xl font-semibold">Page Profile S-Client</h3>

      <div className="flex flex-col">
        <span>Name: {data?.user?.name ?? 'No name'}</span>
        <span>Image: {data?.user?.image ?? 'No image'}</span>
        <span>Email: {data?.user?.email ?? 'No email'}</span>
        <span>Id: {data?.user?.id ?? 'No id'}</span>
      </div>
    </section>
  );
};

export default ProfilePage;
