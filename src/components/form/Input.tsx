import React, {FC, HTMLProps} from 'react';
import {makeStyles, StyledProps} from "@material-ui/styles";
import c from 'classnames';

const useStyles = makeStyles(() => ({
  input: {

  },
}));

export const Input: FC<HTMLProps<HTMLInputElement> & Partial<StyledProps>> = (props) => {
const {className, ...rest} = props;
  const mc = useStyles(props);

  return (
    <input
      className={c(mc.input, className)}
      type="text"
      {...rest}
    />
  );
};
