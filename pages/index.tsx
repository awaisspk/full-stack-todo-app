import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import {HomePageLayout} from '@src/Layouts/HomepageLayout';
import {Header} from '@components/Header';
import {TodoList} from '@components/Todo';
import {prisma} from '@lib/prisma';
import {getSession} from 'next-auth/react';

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({todos}) => {
  return (
    <HomePageLayout>
      <Header />
      <TodoList todoslist={todos} />
    </HomePageLayout>
  );
};

export const getServerSideProps = async ({req}: GetServerSidePropsContext) => {
  const session = await getSession({req});

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  if (session) {
    const todos = await prisma.todo.findMany({
      where: {
        user: {
          email: session.user?.email,
        },
      },
    });

    return {
      props: {
        todos,
      },
    };
  }
};

export default Home;
