import {
  isReferralPending,
  isReferralSuccess,
  isReferralFailure,
  getReferralErrorMsg,
} from '../ui.selector';
import { rootStateMock } from '../../../mocks/root.mock';
import {
  referralEmailSuccessStateMock,
  referralEmailPendingStateMock,
  referralEmailErrorStateMock,
  uiStateMock,
  ERROR,
} from '../../../mocks/ui.mock';

describe('selector', () => {
  it('isReferralPending', () => {
    const rootState = {
      ...rootStateMock,
      ui: { ...uiStateMock, referralEmail: referralEmailPendingStateMock },
    };
    expect(isReferralPending(rootState)).toEqual(true);
  });

  it('isReferralSuccess', () => {
    const rootState = {
      ...rootStateMock,
      ui: { ...uiStateMock, referralEmail: referralEmailSuccessStateMock },
    };
    expect(isReferralSuccess(rootState)).toEqual(true);
  });

  it('isReferralFailure', () => {
    const rootState = {
      ...rootStateMock,
      ui: { ...uiStateMock, referralEmail: referralEmailErrorStateMock },
    };
    expect(isReferralFailure(rootState)).toEqual(true);
  });

  it('getReferralErrorMsg', () => {
    const rootState = {
      ...rootStateMock,
      ui: { ...uiStateMock, referralEmail: referralEmailErrorStateMock },
    };
    expect(getReferralErrorMsg(rootState)).toEqual(ERROR);
  });
});
