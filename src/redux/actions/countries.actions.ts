/* eslint-disable import/no-anonymous-default-export */
import { Dispatch } from 'redux';
import { FETCH_ALL, START_LOADING, STOP_LOADING } from '../../types/ActionsTypes';

import * as api from '..//api/api';

export const fetchAll = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: START_LOADING }); // start loading
    const data = await api.allCountries();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: STOP_LOADING }); // stop loading
  } catch (error) {
    console.log(error);
  }
};

// export const fetchAll = () => {
//   return (dispatch: Dispatch<any>) => {
//     dispatch({ type: START_LOADING }); // start loading
//     api.allCountries().then((data) => {
//       dispatch({ type: FETCH_ALL, payload: data });
//       dispatch({ type: STOP_LOADING }); // stop loading
//     });
//   };
// };

export const fetchById = () => async (dispatch: Dispatch<any>) => {};
