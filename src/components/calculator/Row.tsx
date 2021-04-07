import React, {FC} from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export const CalcRow: FC = (props) => {
  const mc = useStyles(props);

  return (
    <div className={mc.root}>
      {props.children}
    </div>
  );
};
