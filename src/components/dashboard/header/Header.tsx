import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full p-4 flex items-center justify-between bg-blueSemiDark">
      <h2 className="text-2xl capitalize">Dashboard</h2>

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
