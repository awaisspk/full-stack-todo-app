import type {NextPage} from 'next';
import {HomePageLayout} from '@src/Layouts/HomepageLayout';
import {Header} from '@components/Header';

const Home: NextPage = () => {
  return (
    <HomePageLayout>
      <Header />
    </HomePageLayout>
  );
};

export default Home;
