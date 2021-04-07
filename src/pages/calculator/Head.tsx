import React, {ChangeEvent, FC, useCallback} from 'react';
import {Input} from "../../components/form/Input";
import {useDispatch, useSelector} from "react-redux";
import {setInputValue} from "../../store/actions";

export const Head: FC = () => {
  const dispatch = useDispatch();
  const {val1, val2, sum, action} = useSelector((state) => ({
    val1: state.calc.val1,
    val2: state.calc.val2,
    sum: state.calc.sum,
    action: state.calc.action,
  }));

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = e.currentTarget.dataset.index as '1' | '2';

    dispatch(setInputValue(inputIndex, e.currentTarget.value))
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Значение 1</h2>
        <Input value={val1} onChange={onChange} data-index={1} />
      </div>
      <div>
        <h2>Действие: {action}</h2>
      </div>
      <div>
        <h2>Значение 2</h2>
        <Input value={val2} onChange={onChange} data-index={2} />
      </div>
      <div>
        <h2>Результат:</h2>
        <Input value={sum} readOnly />
      </div>
    </div>
  );
};
