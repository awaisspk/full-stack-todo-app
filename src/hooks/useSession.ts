import {useQuery} from 'react-query';
import {UseQueryOptions} from 'react-query';
import {Session} from 'next-auth';
import {useRouter} from 'next/router';

export async function fetchSession(): Promise<Session | null> {
  const res = await fetch('/api/auth/session');
  const session = await res.json();
  if (Object.keys(session).length) {
    return session;
  }
  return null;
}

export const useSession = <R extends boolean = false>({
  required,
  redirectTo = '/api/auth/signin?error=SessionExpired',
  queryConfig = {},
}: {
  required?: R;
  redirectTo?: string;
  queryConfig?: UseQueryOptions<Session | null>;
}): [R extends true ? Session : Session | null, boolean] => {
  const router = useRouter();
  // @ts-ignore
  const query = useQuery(['session'], fetchSession, {
    ...queryConfig,
    onSettled(data, error) {
      if (queryConfig.onSettled) queryConfig.onSettled(data, error);
      if (data || !required) return;
      router.push(redirectTo);
    },
  });

  return [query.data!, query.status === 'loading'];
};
