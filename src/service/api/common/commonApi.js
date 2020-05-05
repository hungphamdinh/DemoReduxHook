import {NativeModules} from 'react-native';
import {BASE_URL} from '../../../config/configApp';

export const combinedURL = (...url) => {
  let fullURL = BASE_URL;
  if (url.length > 0) {
    let subURL = '';
    url.forEach(element => {
      subURL = subURL + element + '/';
    });

    fullURL += subURL.substring(0, subURL.length - 1);
  }
  return fullURL;
};

export async function getVersionAppAndroid(options = {jquerySelector: ''}) {
  return await NativeModules.CheckVersion.appVersionExtractor(
    options.jquerySelector,
  );
}
export const getListData = response => {
  if (!response.Dtos) {
    return [];
  }
  return response.Dtos;
};

export const getSingleData = response => {
  if (!response.Dto) {
    return null;
  }
  return response.Dto;
};

export const parseJsonWithPrefix = request => {
  return {
    DTO: request,
  };
};

// export const getErrorMessage = (error, options = {responseMessage: ''}) => {
//   if (error.status) {
//     return {
//       title: format(
//         strings.common_error_others,
//         error.status,
//         AppConstants.PHONE_SUPPORT,
//       ),
//       responseCode: error.status,
//     };
//   }

//   if (!error.response || !error.response.ResponseCode) {
//     return strings.common_error_network;
//   }

//   let message = strings.undefined_error;
//   let showErrorCode = false;

//   switch (error.response.ResponseCode) {
//     case AppConstants.ResponseCode.ACCOUNT_NOT_ENOUGHT:
//       message = strings.shipment_group_detail_error_account_not_enought;
//       break;
//     case AppConstants.ResponseCode.OUT_OF_UPDATE_SHIPMENT:
//       message = strings.shipment_group_detail_error_out_of_update;
//       break;
//     case AppConstants.ResponseCode.OVER_LIMIT_SHIPMENT_PICKUP:
//       message = format(
//         strings.shipment_group_detail_error_over_limit_shipment_pickup,
//         error.response.Value,
//       );
//       break;
//     case AppConstants.ResponseCode.DRIVER_DISAPPPROVE:
//       message = format(
//         strings.register_phone_error_disapprove,
//         AppConstants.PHONE_SUPPORT,
//       );
//       break;
//     case AppConstants.ResponseCode.DRIVER_NOT_APPROVE:
//       message = format(
//         strings.register_phone_error_notapprove,
//         AppConstants.PHONE_SUPPORT,
//       );
//       break;
//     case AppConstants.ResponseCode.DRIVER_NOT_OFFLINE:
//       message = strings.error_message_not_offline;
//       break;
//     case AppConstants.ResponseCode.ACCOUNT_EXISTED:
//       message = strings.common_error_account_exists;
//       break;
//     case AppConstants.ResponseCode.DRIVER_NOT_ONLINE:
//       message = strings.error_message_not_online;
//       break;
//     case AppConstants.ResponseCode.EMAIL_EXISTSED:
//       message = 'common.error.email_existsed';
//       break;
//     case AppConstants.ResponseCode.ERROR_UNKNOWN:
//       message = strings.common_error_unknown;
//       break;
//     case AppConstants.ResponseCode.INVITATION_CODE_INVALID:
//       message = '';
//       break;
//     case AppConstants.ResponseCode.DRIVER_DO_NOT_ENOUGH_DEPOSIT:
//       message = strings.shipment_group_detail_error_driver_not_enough_deposit;
//       break;
//     case AppConstants.ResponseCode.SHIPMENT_PICKED:
//       message = strings.shipment_detail_info_error_picked;
//       break;
//     case AppConstants.ResponseCode.withdrawTransaction.NOT_ENOUGH_BLANCE:
//       message = strings.transaction_withdraw_not_enough_balance;
//       break;
//     case AppConstants.ResponseCode.withdrawTransaction.NOT_ENOUGH_DEPOSIT:
//       message = strings.transaction_withdraw_not_enough_deposit;
//       break;
//     case AppConstants.ResponseCode.withdrawTransaction.REMAIN_COD_DEBT:
//       message = strings.transaction_withdraw_remain_cod_debt;
//       break;
//     case AppConstants.ResponseCode.withdrawTransaction.DRIVER_NOT_FOUND:
//       message = strings.transaction_withdraw_driver_not_found;
//       break;
//     case AppConstants.ResponseCode.withdrawTransaction.INVALID_AMOUNT:
//       message = options.responseMessage || '';
//       break;
//     default:
//       showErrorCode = true;
//       break;
//   }

//   if (showErrorCode) {
//     message = `${message} (${error.response.ResponseCode})`;
//   }

//   return message;
// };
