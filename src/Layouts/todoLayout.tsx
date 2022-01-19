import {Flex} from '@components/Flex';
import {FC} from 'react';

export const TodoLayout: FC = ({children}) => {
  return (
    <Flex
      flow="col"
      gap="10"
      css={{width: 'min(800px , 100%)', marginX: 'auto'}}
    >
      {children}
    </Flex>
  );
};
