import * as Action from '../actions';
import {GroupStoreAPI} from '../../../../service/api/groupStore';

export const fetchStoreItem = isLoading => {
  return async dispatch => {
    dispatch(Action.fetchingItem(isLoading));
    try {
      let respone = await fetch('https://dry-hamlet-72216.herokuapp.com/store');
      let json = await respone.json();
      dispatch(Action.successedItem(json));
    } catch (error) {
      dispatch(Action.failedItem(error));
    }
  };
};

export const excuteGroupStoreAPI = isLoading => {
  return dispatch => {
    try {
      const response = GroupStoreAPI.getGroupStore();
      if (response != null) {
        dispatch(Action.successedItem(response));
      } else {
        dispatch(Action.failedItem('Không tìm thấy dữ liệu'));
      }
    } catch (error) {
      dispatch(Action.failedItem(error.toString()));
    }
  };
};
