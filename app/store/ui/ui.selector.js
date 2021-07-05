import { STATUS } from '../../constants/global-constants';

export const isReferralPending = state =>
  state.ui.referralEmail.status === STATUS.PENDING;

export const isReferralSuccess = state =>
  state.ui.referralEmail.status === STATUS.SUCCESS;

export const isReferralFailure = state =>
  state.ui.referralEmail.status === STATUS.ERROR;

export const getReferralErrorMsg = state => state.ui.referralEmail.error;
