'use client';

import { MenuPath } from '@/interfaces/MenuPath.Interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  menuItem: MenuPath;
};

export const NavBarItem = ({ menuItem }: Props) => {
  const pathMenu = usePathname();

  const isActive = pathMenu === menuItem.path && 'bg-backgroundFocus text-textWhite';

  return (
    <li>
      <Link
        href={menuItem.path}
        className={`py-4 px-2 flex items-center gap-2 rounded-md font-semibold text-textGray ${isActive} `}
      >
        {menuItem.icon}
        <span>{menuItem.title}</span>
      </Link>
    </li>
  );
};
