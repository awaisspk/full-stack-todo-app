import React from 'react';
import {styled} from '@stitches';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Tick} from '@components/icons';
import {useMutation} from 'react-query';
import axios from 'axios';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  overflow: 'hidden',
  minWidth: 25,
  minHeight: 25,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid $outlineColor',

  '&:focus-visible': {
    outline: '2px solid $primary',
    outlineOffset: '4px',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  width: '100%',
});

const CheckboxIndicator = StyledIndicator;

export type CheckboxProps = {
  isChecked: boolean;
  id: string;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckBox = ({isChecked, setIsChecked, id}: CheckboxProps) => {
  const mutation = useMutation((update: {completed: boolean}) => {
    return axios.post(`/api/todos/${id}`, update);
  });

  return (
    <StyledCheckbox
      defaultChecked
      id={id}
      checked={isChecked}
      css={{backgroundColor: isChecked ? '$outlineColor' : 'transparent'}}
      onCheckedChange={() => {
        setIsChecked(!isChecked);
        mutation.mutate({completed: !isChecked});
      }}
    >
      <CheckboxIndicator>
        <Tick />
      </CheckboxIndicator>
    </StyledCheckbox>
  );
};
