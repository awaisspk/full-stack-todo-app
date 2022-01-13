import {styled, css} from '@stitches';

const text = css({
  color: '$typefacePrimary',
});

export const Text = styled('span', text);
export const Paragraph = styled('p', text);
export const ListItem = styled('li', text);

export const Title = styled('h1', text, {
  color: '$typefacePrimary',
  fontSize: '$7',
  '@bp2': {
    fontSize: '$8',
  },
});

export const Subtitle = styled('h2', text, {});
