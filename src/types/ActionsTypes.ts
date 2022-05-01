export type InputProps = {
  value: string;
  onChange: (e: any) => void;
};

// Actions types
export const FETCH_ALL = 'FETCH_ALL';
export const FETCH_ONE = 'FETCH_ONE';

//Loading actions
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

//Car types
export const FETCH_DATA_CAR = 'FETCH_DATA_CAR';
export const REMOVE_DATA_CAR = 'REMOVE_DATA_CAR';
