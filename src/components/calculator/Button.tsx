import React, {FC, MouseEvent} from 'react';
import {withStyles} from "@material-ui/styles";

const Button: FC<{ onClick?: (e: MouseEvent<HTMLButtonElement>) => void}> = (props) => {
  const {children, classes, ...rest} = props as any;

  return (
    <button className={classes.btn} {...rest}>
      {children}
    </button>
  );
};

export const CalcButton = withStyles(() => ({
  btn: {
    width: 40,
    height: 40,
    outline: 'none',
    background: 'none',
    border: '1rx solid red',
    borderRadius: 0,
  },
}))(Button);
