import {motion} from 'framer-motion';
import {SVGProps} from 'react';

export const Tick = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="-2 -4 24 24"
      strokeWidth="1.5"
      stroke="black"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d="M5 12l5 5l10 -10"
        initial={{rotateZ: '-45deg'}}
        animate={{rotateZ: '0deg', transformOrigin: 'right'}}
        transition={{duration: 0.3}}
      />
    </svg>
  );
};
