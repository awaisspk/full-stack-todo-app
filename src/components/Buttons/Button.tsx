import {styled} from '@stitches';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: '3px solid $borderColor',
  fontFamily: '$primary',
  fontSize: '$2',
  fontWeight: '$500',
  py: '$5',
  px: '$5',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.9em',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$typefaceSecondary',
  background: 'transparent',

  '& svg': {
    marginRight: '$3',
  },

  variants: {
    variant: {
      signin: {
        width: '100%',
        py: '$6',
      },
    },
  },
});

type StyledButtonProps = React.ComponentProps<typeof StyledButton>;
type Props = StyledButtonProps & {
  signin?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  signin = false,
  ...rest
}) => {
  const buttonVariants: Variants = {
    idle: {
      border: '3px solid rgba(52,51,67,1)',
    },
    hover: {
      border: '3px solid #fd76a1',
    },
    tap: {
      scale: 0.99,
    },
  };

  const signInBtn: Variants = {
    idle: {
      backgroundColor: 'transparent',
    },
    hover: {
      backgroundColor: 'rgba(52,51,67,1)',
    },
  };

  return (
    <>
      <StyledButton
        variants={signin ? signInBtn : buttonVariants}
        initial={signin ? '' : 'idle'}
        whileHover="hover"
        whileTap={signin ? '' : 'tap'}
        variant={signin ? 'signin' : undefined}
        {...rest}
      >
        {children}
      </StyledButton>
    </>
  );
};
