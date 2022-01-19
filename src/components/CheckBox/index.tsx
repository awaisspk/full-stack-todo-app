import {DeleteTodo} from '@components/DeleteTodo';
import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {CheckBox} from './Checkbox';

const Label = styled(motion.label, {
  width: '100%',
});

const Text = styled(motion.span, {
  color: '#d4d8e2',
  whiteSpace: 'break-spaces',
  background: 'linear-gradient(90deg,#edeef0,#edeef0)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 2px',
  backgroundPosition: 'left 60%',
  userSelect: 'none',
  fontSize: '$3',
});

const Container = styled(motion.li, Flex, {
  width: '100%',
  minHeight: '70px',
  px: '$8',
  borderRadius: '20px',
  backgroundColor: 'rgba(33, 33, 43,0.7)',
  [`&:hover .iconButton}`]: {
    opacity: 1,
  },
});

type Props = {
  children: React.ReactNode;
  id: string;
  status: boolean;
  deleteTodo: React.Dispatch<React.SetStateAction<string>>;
};

export const Todo = ({id, children, status, deleteTodo}: Props) => {
  const [checked, setChecked] = useState(status);

  return (
    <Container cross="center" main="spaceBtw" whileHover={{translateX: 5}}>
      <Flex center gap="6" css={{width: '100%'}}>
        <CheckBox isChecked={checked} id={id} setIsChecked={setChecked} />
        <Label htmlFor={id}>
          <Text
            initial={false}
            animate={{
              backgroundSize: checked ? '100% 3px' : '0% 3px',
            }}
            transition={{
              type: 'spring',
            }}
          >
            {children}
          </Text>
        </Label>
      </Flex>
      <DeleteTodo deleteTodo={deleteTodo} id={id} />
    </Container>
  );
};
