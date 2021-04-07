import {AnyAction} from 'redux';

type State = {
  val1: string;
  val2: string;
  action: string;
  sum: string | number;
};

const initialState: State = {
  val1: '0',
  val2: '0',
  action: '+',
  sum: '0',
};

const calculate = (val1: string, val2: string, action: string): string | number | null => {
  const parseVal1 = parseFloat(val1),
    parseVal2 = parseFloat(val2);

  console.log(parseVal1, val1, parseVal2, val2);

  if (isNaN(parseVal1) && isNaN(parseVal2)) {
    if (action === '+') {
      return val1 + val2;
    } else {
      return 'Поля должны иметь числовые значения для операций типа хї!';
    }
  }
  if (action === '+') {
    return parseVal1 + parseVal2;
  } if (action === '*') {
    return parseVal1 * parseVal2;
  } if (action === '/') {
    return parseVal1 / parseVal2;
  } if (action === '-') {
    return parseVal1 - parseVal2;
  } if (action === '%') {
    return parseVal1 % parseVal2;
  } else {
    return 'null';
  }
};

export const calc = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case 'CHANGE_VAL1':
      return {
        ...state,
        val1: action.value,
        sum: calculate(action.value, state.val2, state.action) ?? state.sum,
      };
    case 'CHANGE_VAL2':
      return {
        ...state,
        val2: action.value,
        sum: calculate(state.val1, action.value, state.action) ?? state.sum,
      };
    case 'CALCULATE':
      return {
        ...state,
        sum: calculate(state.val1, state.val2, state.action) ?? state.sum,
      };
    case 'SET_ACTION':
      return {
        ...state,
        action: action.value,
        sum: calculate(state.val1, state.val2, action.value) ?? state.sum,
      };

    default:
      return state;
  }
}
