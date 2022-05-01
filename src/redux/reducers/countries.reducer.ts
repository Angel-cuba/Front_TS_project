/* eslint-disable import/no-anonymous-default-export */
import { CountriesData } from '../../interfaces/Country';
import { FETCH_ALL, START_LOADING, STOP_LOADING } from '../../types/ActionsTypes';

interface Fetch {
  isLoading: boolean;
  countries?: CountriesData[];
}

export default (state: Fetch = { isLoading: true, countries: [] }, action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        countries: action.payload,
        isLoading: false,
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
