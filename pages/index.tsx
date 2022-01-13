import type {NextPage} from 'next';
import {useSession} from '@hooks/useSession';
import {signOut} from 'next-auth/react';

const Home: NextPage = () => {
  const [session] = useSession({
    required: true,
    redirectTo: '/auth/signin',
    queryConfig: {
      staleTime: 60 * 1000 * 60 * 3, // 3 hours
      refetchInterval: 60 * 1000 * 5, // 5 minutes
    },
  });

  if (session) {
    const {user} = session;

    return (
      <div>
        <span>Home page</span>
        <button
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}/auth/signin`,
            })
          }
        >
          signOut
        </button>
        <div>{user?.email}</div>
        {user?.image && (
          <div
            style={{
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
              display: 'block',
            }}
          >
            {/* <img src={user.image} alt="Profile image" /> */}
          </div>
        )}
      </div>
    );
  }

  if (!session) {
    return <div>not session found</div>;
  }

  return <div>user not found</div>;
};

export default Home;
