import {styled} from '@stitches';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: '3px solid $borderColor',
  color: '$typefacePrimary',
  fontFamily: '$primary',
  fontSize: '$2',
  fontWeight: '$500',
  px: '$5',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.9em',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  background: 'linear-gradient(90deg, #7f00ff 0%, #e100ff 100%)',

  '& svg': {
    marginRight: '$3',
  },

  variants: {
    signin: {
      true: {
        width: '100%',
        background: 'transparent',
        textSizeAdjust: 'none',
        py: '$6',
        color: '$typefaceSecondary',
      },
    },
  },
});

type StyledButtonProps = React.ComponentProps<typeof StyledButton>;
type Props = StyledButtonProps & {
  signin: boolean;
};

export const Button: React.FC<Props> = ({children, signin, ...rest}) => {
  const buttonVariants: Variants = {
    idle: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
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
        signin
        {...rest}
      >
        {children}
      </StyledButton>
    </>
  );
};
