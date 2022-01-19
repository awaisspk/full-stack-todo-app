import {Flex} from '@components/Flex';
import {PlusIcon} from '@components/icons';
import {styled} from '@stitches';
import React from 'react';

const AddButton = styled('button', {
  fontSize: '$0',
  lineHeight: '1',
  padding: '0',
  minHeight: '28px',
  minWidth: '28px',
  borderRadius: '10px',
  background: '$primary',
  border: 'none',

  '&:hover': {
    backgroundColor: '$primary',
  },

  '&:active': {
    backgroundColor: '$outlineColor',
  },
});

const Form = styled('form', Flex, {
  width: '100%',
  height: '50px',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  overflow: 'hidden',
  border: '2px solid #34333a',
  color: '$fontPrimary',
  px: '$6',
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  height: '100%',
  px: '$4',
});

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
};

export const CreateTodo = ({value, setValue, handleSubmit}: Props) => {
  return (
    <Form onSubmit={handleSubmit} center gap="3">
      <AddButton type="submit">
        <PlusIcon />
      </AddButton>
      <Input
        type="text"
        placeholder="Add a task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};
