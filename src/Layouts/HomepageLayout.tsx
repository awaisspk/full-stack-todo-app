import {Grid} from '@components/Grid';
import {FC} from 'react';

export const HomePageLayout: FC = ({children}) => {
  return (
    <Grid
      css={{
        width: 'min(1000px, 90%)',
        marginX: 'auto',
        minH: '100vh',
        gridTemplateRows: '100px auto 40px',
      }}
    >
      {children}
    </Grid>
  );
};
