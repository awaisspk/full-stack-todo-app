import {getProviders, signIn} from 'next-auth/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import {SignInError} from '@components/SigninError';
import {Button} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import {GithubIcon, GoogleIcon} from '@components/icons';
import {Title} from '@components/Typography';

const Wrapper = styled('section', Flex, {
  width: '100vw',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

const SigninPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({providers}) => {
  const {error} = useRouter().query;
  const ErrorMessage = error && <SignInError error={error} />;

  return (
    <Wrapper>
      <Flex flow="col" gap="8" css={{width: 'min(350px, 100%)'}}>
        <Title css={{textAlign: 'center'}}>Sign in.</Title>
        {ErrorMessage}

        <Flex flow="col" gap="7">
          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                signin
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `${window.location.origin}`,
                  })
                }
              >
                {provider.name === 'GitHub' ? <GithubIcon /> : <GoogleIcon />}
                Sign in with {provider.name}
              </Button>
            ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};

export default SigninPage;
