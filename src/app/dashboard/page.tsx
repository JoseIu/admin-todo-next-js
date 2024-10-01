import { auth } from '@/auth';
import { Header } from '@/components';
import { WidgetItem } from '@/components/dashboard/widget-item/WidgetItem';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/signin');
  }
  return (
    <section>
      <Header />

      <WidgetItem title="User conected S-Side">
        <div className="flex flex-col">
          <span>name: {session.user?.name}</span>
          <span>image: {session.user?.image}</span>
          <span>email: {session.user?.email}</span>
          <span>id: {session.user?.id}</span>
          <br />
          {JSON.stringify(session)}
        </div>
      </WidgetItem>
    </section>
  );
};

export default DashboardPage;
