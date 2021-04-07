import { AnyAction } from 'redux';

type State = {
  actions: string[][];
};

const initialState: State = {
  actions: [
    ['%', '/', '+', '-', '*'],
    // ['1', '2', '3', '4', '5'],
    // ['6', '7', '8', '9', '0'],
  ],
};

export const actions = (state = initialState, action: AnyAction): State =>  {
  switch (action.type) {
    default:
      return state;
  }
}
