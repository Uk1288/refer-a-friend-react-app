import uiReducer from '../ui.reducer';
import {
  referralEmailInitialStateMock,
  referralEmailSuccessStateMock,
  referralEmailPendingStateMock,
  referralEmailErrorStateMock,
  uiStateMock,
  ERROR,
} from '../../../mocks/ui.mock';
import {
  sendReferralEmailPending,
  sendReferralEmailError,
  sendReferralEmailSuccess,
  resetReferralEmail,
} from '../ui.action';

describe('uiReducer', () => {
  describe('referralEmail', () => {
    it('sets pending state', () => {
      const state = uiStateMock;
      const action = sendReferralEmailPending();
      expect(uiReducer(state, action).referralEmail).toEqual(
        referralEmailPendingStateMock,
      );
    });

    it('sets error state', () => {
      const state = {
        ...uiStateMock,
        referralEmail: referralEmailPendingStateMock,
      };
      const action = sendReferralEmailError(ERROR);
      expect(uiReducer(state, action).referralEmail).toEqual(
        referralEmailErrorStateMock,
      );
    });

    it('sets success state', () => {
      const state = {
        ...uiStateMock,
        referralEmail: referralEmailPendingStateMock,
      };
      const action = sendReferralEmailSuccess();
      expect(uiReducer(state, action).referralEmail).toEqual(
        referralEmailSuccessStateMock,
      );
    });

    it('resets to initial state after error occurs', () => {
      const state = {
        ...uiStateMock,
        referralEmail: referralEmailErrorStateMock,
      };
      const action = resetReferralEmail();
      expect(uiReducer(state, action).referralEmail).toEqual(
        referralEmailInitialStateMock,
      );
    });

    it('resets to initial state after success occurs', () => {
      const state = {
        ...uiStateMock,
        referralEmail: referralEmailSuccessStateMock,
      };
      const action = resetReferralEmail();
      expect(uiReducer(state, action).referralEmail).toEqual(
        referralEmailInitialStateMock,
      );
    });
  });
});
