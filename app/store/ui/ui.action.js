export const SEND_REFERRAL_EMAIL = 'SEND_REFERRAL_EMAIL';
export const SEND_REFERRAL_EMAIL_PENDING = 'SEND_REFERRAL_EMAIL_PENDING';
export const SEND_REFERRAL_EMAIL_SUCCESS = 'SEND_REFERRAL_EMAIL_SUCCESS';
export const SEND_REFERRAL_EMAIL_ERROR = 'SEND_REFERRAL_EMAIL_ERROR';
export const RESET_REFERRAL_EMAIL = 'RESET_REFERRAL_EMAIL';

export const sendReferralEmailError = error => ({
  type: SEND_REFERRAL_EMAIL_ERROR,
  payload: {},
  error,
});

export const sendReferralEmailPending = () => ({
  type: SEND_REFERRAL_EMAIL_PENDING,
  payload: {},
});

export const sendReferralEmailSuccess = () => ({
  type: SEND_REFERRAL_EMAIL_SUCCESS,
  payload: {},
});

export const sendReferralEmail = payload => ({
  type: SEND_REFERRAL_EMAIL,
  payload,
});

export const resetReferralEmail = () => ({
  type: RESET_REFERRAL_EMAIL,
  payload: {},
});
