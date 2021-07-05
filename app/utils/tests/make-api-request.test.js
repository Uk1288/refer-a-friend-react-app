import axios from 'axios';
import { parseError, makeApiRequest } from '../make-api-request';
import {
  EMAIL_REFERRAL_ENDPOINT,
  POST,
  BACKEND_ENDPOINT,
} from '../../constants/global-constants';

describe('make-api-request', () => {
  describe('parseError', () => {
    const mockError = 'Error occured';
    it('returns error message when response data is present', () => {
      const mockErrorObj = { response: { data: { message: mockError } } };
      expect(parseError(mockErrorObj)).toEqual(mockError);
    });

    it('returns error when response data is not present', () => {
      expect(parseError(mockError)).toEqual(mockError);
    });
  });

  describe('makeApiRequest', () => {
    describe('POST', () => {
      const mockRequestParams = {
        url: EMAIL_REFERRAL_ENDPOINT,
        method: POST,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {},
      };

      axios.request = jest.fn().mockResolvedValue({ response: {} });

      afterEach(() => {
        axios.request.mockRestore();
      });

      it('makes expected request with correct params', () => {
        makeApiRequest(mockRequestParams);
        expect(axios.request).toHaveBeenCalledWith({
          ...mockRequestParams,
          baseURL: BACKEND_ENDPOINT,
        });
      });
    });
  });
});
