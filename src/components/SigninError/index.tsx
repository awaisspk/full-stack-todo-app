import {Text} from '@components/Typography';

const errors = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};

export const SignInError = ({error}: any) => {
  // @ts-ignore
  const errorMessage: string = error && (errors[error] ?? errors.default);
  return (
    <Text
      css={{
        maxW: '100%',
        backgroundColor: '$error',
        py: '$6',
        px: '$3',
        borderRadius: '10px',
        textAlign: 'center',
        fontWeight: '$400',
      }}
    >
      {errorMessage}
    </Text>
  );
};
