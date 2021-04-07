export const setInputValue = (inputNumber: '1' | '2', value: string) => ({
  type: `CHANGE_VAL${inputNumber}`,
  value,
});

export const changeAction = (value: string) => ({
  type: 'SET_ACTION',
  value,
});

