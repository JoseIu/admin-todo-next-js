import { NavBar } from '@/components';

type Props = {
  children: React.ReactNode;
};
const DashBoardLayout = ({ children }: Props) => {
  return (
    <main className="h-dvh grid grid-cols-[auto_1fr]">
      <NavBar />
      {children}
    </main>
  );
};

export default DashBoardLayout;
