import React from 'react';
import {styled} from '@stitches';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {Flex} from '@components/Flex';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$todoBg',
  border: 'none',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$typefaceSecondary',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

type Props = {
  imgSrc: string | undefined | null;
  name: string | undefined | null;
};

export const Avatar = ({name, imgSrc}: Props) => (
  <Flex css={{gap: 20}}>
    <StyledAvatar>
      {imgSrc && name && <AvatarImage src={imgSrc} alt={name} />}
      <AvatarFallback delayMs={600}>U</AvatarFallback>
    </StyledAvatar>
  </Flex>
);
