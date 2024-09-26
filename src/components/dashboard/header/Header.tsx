'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathMenu = usePathname();
  return (
    <header className="w-full p-4 flex items-center justify-between bg-blueSemiDark">
      <h2 className="text-2xl capitalize">{pathMenu.slice(1)}</h2>

      <input className="bg-blueDark p-2 rounded-md" type="search" name="search" id="search" />

      <div className="flex items-center gap-2">
        <span>Vincent</span>

        <Image
          src="/images/avatar.jpg"
          alt="user"
          height={40}
          width={40}
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
    </header>
  );
};
