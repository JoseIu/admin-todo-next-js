import { Header, TabBar } from '@/components';
import { cookies } from 'next/headers';

const CookiesPage = () => {
  const cookiesStore = Number(cookies().get('selectedTab')?.value);
  return (
    <section>
      <Header />
      <TabBar correntTab={cookiesStore} />
    </section>
  );
};

export default CookiesPage;
