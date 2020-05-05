import * as ActionType from './type';

export const fetchingItem = loading => {
  return {
    type: ActionType.FETCHING_ITEM,
    loading,
  };
};

export const successedItem = data => {
  return {
    type: ActionType.SUCCESSED_ITEM,
    data,
  };
};

export const failedItem = error => {
  return {
    type: ActionType.FAILED_ITEM,
    error,
  };
};
