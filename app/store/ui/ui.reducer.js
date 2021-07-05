import { combineReducers } from 'redux';
import {
  SEND_REFERRAL_EMAIL_ERROR,
  SEND_REFERRAL_EMAIL_PENDING,
  SEND_REFERRAL_EMAIL_SUCCESS,
  RESET_REFERRAL_EMAIL,
} from './ui.action';
import { STATUS } from '../../constants/global-constants';

const initialReferralEmailState = {
  status: '',
  error: undefined,
};

const referralEmailReducer = function(
  state = initialReferralEmailState,
  action,
) {
  switch (action.type) {
    case SEND_REFERRAL_EMAIL_PENDING:
      return { status: STATUS.PENDING, error: undefined };
    case SEND_REFERRAL_EMAIL_ERROR:
      return { status: STATUS.ERROR, error: action.error };
    case SEND_REFERRAL_EMAIL_SUCCESS:
      return {
        status: STATUS.SUCCESS,
        error: undefined,
      };
    case RESET_REFERRAL_EMAIL:
      return initialReferralEmailState;
    default:
      return state;
  }
};

/*
 * uiReducer captures UI ephemeral states including the
 * referralEmail state and other tentative ui states
 */
const uiReducer = combineReducers({
  referralEmail: referralEmailReducer,
});

export default uiReducer;
