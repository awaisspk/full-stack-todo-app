import {Avatar} from '@components/Avatar';
import {Box} from '@components/Box';
import {Button} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {Text} from '@components/Typography';
import {useSession} from '@hooks/useSession';
import * as Popover from '@radix-ui/react-popover';
import {styled} from '@stitches';
import {signOut} from 'next-auth/react';

const Trigger = styled(Popover.Trigger, {
  overflow: 'hidden',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '100%',
});

const Content = styled(Popover.Content, Flex, {
  backgroundColor: '$accent',
  borderRadius: '$4',
  px: '$10',
  py: '$10',
});

export const Menu = () => {
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
      <Popover.Root modal={false} defaultOpen={false}>
        <Trigger>
          <Avatar imgSrc={user?.image} name={user?.name} />
        </Trigger>
        <Content flow="col" gap="8" side="bottom" sideOffset={10} align="end">
          <Box>
            <Text
              as="h3"
              css={{
                fontSize: '$5',
              }}
            >
              {user?.name}
            </Text>
            <Text as="p" css={{fontSize: '$1'}}>
              {user?.email}
            </Text>
          </Box>
          <Button
            onClick={() => signOut()}
            css={{
              width: '100%',
            }}
          >
            Sign Out
          </Button>
        </Content>
      </Popover.Root>
    );
  }

  return null;
};
