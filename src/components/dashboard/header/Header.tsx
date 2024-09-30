import { auth } from '@/auth';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export const Header = async () => {
  const session = await auth();
  const userName = session?.user?.name ?? 'No name';
  const userImage = session?.user?.image ?? '/images/avatar.jpg';
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');

  const getTotalCount = () => {
    let items = 0;

    Object.values(cart).forEach((value) => {
      items += value as number;
    });
    return items;
  };

  return (
    <header className="w-full p-4 flex items-center justify-between bg-blueSemiDark">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl capitalize">Dashboard</h2>
        <Link href="/dashboard/cart" className="flex items-center gap-2 px-4 py-2 bg-blueDark rounded-lg">
          <span className="text-btnColor font-semibold">{getTotalCount()}</span>
          <IoCartOutline size={25} />
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <span>{userName}</span>

        <Image
          src={userImage}
          alt="user"
          height={40}
          width={40}
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
    </header>
  );
};
