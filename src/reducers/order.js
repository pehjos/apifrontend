import {DELETEORDER, ORDER, CREATEORDER, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, order: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case ORDER:
      return {
        ...state,
        order: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, order: action.payload.data };
    case FETCH_POST:
      return { ...state, order: action.payload.post };
    case LIKE:
      return { ...state, order: state.order.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
        order: state.order.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATEORDER:
      return { ...state, order: [...state.order, action.payload] };
    case UPDATE:
      return { ...state, order: state.order.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETEORDER:
      return { ...state, order: state.order.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
