import {globalCss} from '@stitches';
import {normalize} from 'stitches-normalize-css';

export const globalStyles = globalCss(...normalize, {
  '@font-face ': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'swap',
    src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
  },

  html: {
    boxSizing: 'border-box',
  },

  '*, ::before, ::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    WebkitTapHighlightColor: 'transparent',
  },

  a: {
    textDecoration: 'none',
  },

  '*:focus:not(:focus-visible)': {
    outline: 'none',
  },

  '*:focus-visible': {
    outline: '2px solid $primary',
    outlineOffset: '4px',
  },

  img: {
    maxWidth: '100%',
  },

  body: {
    lineHeight: 1.5,
    color: '$typefacePrimary',
    fontFamily: '$primary',
    backgroundColor: '$bodyBg',
  },

  'h1, h2, h3, h4,li,p': {
    overflowWrap: 'break-word',
    hyphens: 'auto',
    WebkitHyphens: 'auto',
  },
});
