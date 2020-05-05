import * as ActionType from '../actions/type';

const defaultState = {
  loading: false,
  data: '',
  error: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.FETCHING_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SUCCESSED_ITEM:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case ActionType.FAILED_ITEM:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
