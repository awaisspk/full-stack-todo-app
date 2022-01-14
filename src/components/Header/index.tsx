import {Flex} from '@components/Flex';
import {Menu} from '@components/Menu';
import {Subtitle} from '@components/Typography';
export const Header = () => {
  return (
    <Flex main="spaceBtw" cross="center">
      <Subtitle css={{fontSize: '$5'}}>NextTodo.</Subtitle>
      <Menu />
    </Flex>
  );
};
