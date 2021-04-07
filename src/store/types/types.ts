import {rootReducer}  from '../provider';

export type AppState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  export interface DefaultRootState extends AppState {}
}
