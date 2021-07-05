import { put, all, takeLatest, call } from 'redux-saga/effects';
import {
  SEND_REFERRAL_EMAIL,
  sendReferralEmailError,
  sendReferralEmailPending,
  sendReferralEmailSuccess,
} from './ui.action';
import makeApiRequest, { parseError } from '../../utils/make-api-request';
import {
  EMAIL_REFERRAL_ENDPOINT,
  POST,
} from '../../constants/global-constants';

export const sendReferralEmailListener = function* sendReferralEmailListener({
  payload,
}) {
  yield put(sendReferralEmailPending());
  try {
    yield call(makeApiRequest, {
      url: EMAIL_REFERRAL_ENDPOINT,
      method: POST,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(payload),
    });
    yield put(sendReferralEmailSuccess());
  } catch (err) {
    yield put(sendReferralEmailError(parseError(err)));
  }
};

export default function* uiSaga() {
  yield all([takeLatest(SEND_REFERRAL_EMAIL, sendReferralEmailListener)]);
}
