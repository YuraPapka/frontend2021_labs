import React, {FC, MouseEvent} from 'react';
import {connect, DispatchProp, useDispatch} from "react-redux";
import {CalcRow} from "../../components/calculator/Row";
import {AppState} from "../../store/types/types";
import {CalcButton} from "../../components/calculator/Button";
import {Head} from "./Head";
import {changeAction} from "../../store/actions";

type CalculatorProps = {
  actions: string[][]
};

const Calculator: FC<CalculatorProps & DispatchProp> = (props) => {
  const {actions} = props;
  const dispatch = useDispatch();

  const changeActionType = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(changeAction(e.currentTarget.dataset.action as string))
  };

  return (
    <div>
      <Head />
      <div style={{
        marginTop: '2rem',
      }}>
        {actions.map((actionList, idx) => (<CalcRow key={idx}>
          {actionList.map((action) => (
            <CalcButton
              key={action}
              onClick={changeActionType}
              data-action={action}
            >
              {action}
            </CalcButton>
          ))}
        </CalcRow>))}
      </div>
    </div>
  );
};

export default connect<CalculatorProps, AppState>((state) => ({
  actions: state.actions.actions
}))(Calculator);
