import {BaseApi} from './common/BaseApi';
import {combinedURL} from './common/commonApi';
import format from 'string-format';

const urlGetGroupStoreItem = 'store';

async function getGroupStore() {
  const url = format(urlGetGroupStoreItem);
  const response = await BaseApi.GET(combinedURL(url));
  return response;
}

export const GroupStoreAPI = {
  getGroupStore,
};
