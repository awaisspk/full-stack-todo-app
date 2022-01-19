import {Dustbin} from '@components/icons/delete';
import {styled} from '@stitches';
import axios from 'axios';
import React from 'react';
import {useMutation} from 'react-query';

const IconButton = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '$5',
  transition: '300ms',
  borderRadius: '5px',
  // opacity: '0',

  '&:focus': {
    opacity: 1,
  },
  '&:active svg': {
    stroke: '$primary',
  },
  '@bp2': {
    marginRight: '10px',
  },
});

type Props = {
  deleteTodo: React.Dispatch<React.SetStateAction<string>>;
  id: string;
};

export const DeleteTodo = ({deleteTodo, id}: Props) => {
  const mutation = useMutation(
    (update: {completed?: boolean; delete?: boolean}) => {
      return axios.post(`/api/todos/${id}`, update);
    }
  );

  const handleDeleteTodo = () => {
    deleteTodo(id);
    mutation.mutate({delete: true});
  };

  return (
    <div>
      <IconButton className="iconButton" onClick={handleDeleteTodo}>
        <Dustbin />
      </IconButton>
    </div>
  );
};
