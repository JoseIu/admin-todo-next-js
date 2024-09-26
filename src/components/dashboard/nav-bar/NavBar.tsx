import { MenuPath } from '@/interfaces/MenuPath.Interface';
import { IoCheckboxOutline, IoHomeOutline, IoListOutline } from 'react-icons/io5';
import { NavBarItem } from '../nav-bar-item/NavBarItem';

const menuPaths: MenuPath[] = [
  {
    path: '/dashboard',
    icon: <IoHomeOutline size={25} />,
    title: 'Dashboard',
  },
  {
    path: '/dashboard/rest-todos',
    icon: <IoCheckboxOutline size={25} />,
    title: 'Rest Todos',
  },
  {
    path: '/dashboard/server-todos',
    icon: <IoListOutline size={25} />,
    title: 'Server Actions',
  },
];

export const NavBar = () => {
  return (
    <aside className="w-52 p-2 bg-blueDark text-textWhite flex flex-col gap-16">
      <h1 className="text-xl font-bold text-center">Todo Next.js</h1>

      <nav>
        <ul className="flex flex-col gap-4">
          {menuPaths.map((item) => (
            <NavBarItem key={item.path} menuItem={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
