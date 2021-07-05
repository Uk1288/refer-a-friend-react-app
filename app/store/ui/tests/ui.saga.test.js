import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import { sendReferralEmailListener } from '../ui.saga';
import {
  sendReferralEmail,
  sendReferralEmailPending,
  sendReferralEmailSuccess,
  sendReferralEmailError,
} from '../ui.action';
import { ERROR } from '../../../mocks/ui.mock';
import makeApiRequest from '../../../utils/make-api-request';
import {
  EMAIL_REFERRAL_ENDPOINT,
  POST,
} from '../../../constants/global-constants';

describe('ui saga', () => {
  describe('sendReferralEmailListener', () => {
    afterEach(() => {
      axios.request.mockRestore();
    });

    const mockPayload = { email: 'abc@abc.abc' };

    it('succeeds', () => {
      axios.request = jest.fn().mockResolvedValue({ response: {} });

      expectSaga(sendReferralEmailListener, sendReferralEmail(mockPayload))
        .put(sendReferralEmailPending())
        .call(makeApiRequest, {
          url: EMAIL_REFERRAL_ENDPOINT,
          method: POST,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(mockPayload),
        })
        .put(sendReferralEmailSuccess())
        .run();
    });

    it('fails with error', () => {
      axios.request = jest.fn().mockRejectedValue({
        response: {
          data: { message: ERROR },
        },
      });

      expectSaga(sendReferralEmailListener, sendReferralEmail(mockPayload))
        .put(sendReferralEmailPending())
        .call(makeApiRequest, {
          url: EMAIL_REFERRAL_ENDPOINT,
          method: POST,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(mockPayload),
        })
        .not.put(sendReferralEmailSuccess())
        .put(sendReferralEmailError(ERROR))
        .run();
    });
  });
});
