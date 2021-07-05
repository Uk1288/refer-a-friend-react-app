import { STATUS } from '../constants/global-constants';

export const ERROR = 'Error occured';

export const referralEmailInitialStateMock = {
  status: '',
  error: undefined,
};

export const referralEmailSuccessStateMock = {
  status: STATUS.SUCCESS,
  error: undefined,
};

export const referralEmailPendingStateMock = {
  status: STATUS.PENDING,
  error: undefined,
};

export const referralEmailErrorStateMock = {
  status: STATUS.ERROR,
  error: ERROR,
};

export const uiStateMock = {
  referralEmail: referralEmailInitialStateMock,
};
