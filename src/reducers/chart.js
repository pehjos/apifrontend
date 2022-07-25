import {DELETEChart, Chart, CREATEChart, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, chart: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case Chart:
      return {
        ...state,
        chart: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, chart: action.payload.data };
    case FETCH_POST:
      return { ...state, chart: action.payload.post };
    case LIKE:
      return { ...state, chart: state.chart.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
        chart: state.chart.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATEChart:
      return { ...state, chart: [...state.chart, action.payload] };
    case UPDATE:
      return { ...state, chart: state.chart.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETEChart:
      return { ...state, chart: state.chart.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
