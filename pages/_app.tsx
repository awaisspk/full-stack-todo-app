import {globalStyles} from '@globalCss';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
