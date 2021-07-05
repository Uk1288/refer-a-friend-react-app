import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../../configureStore';
import ConnectedReferAFriendForm, {
  ReferAFriendForm,
  mapDispatchToProps,
  mapStateToProps,
} from '../index';
import { rootStateMock } from '../../../../mocks/root.mock';
import {
  referralEmailSuccessStateMock,
  referralEmailPendingStateMock,
  referralEmailErrorStateMock,
  uiStateMock,
} from '../../../../mocks/ui.mock';
import {
  sendReferralEmail,
  resetReferralEmail,
} from '../../../../store/ui/ui.action';

const mockEmail = 'abc@abc.abc';

describe('<ReferAFriendForm />', () => {
  describe('<ConnectedReferAFriendForm />', () => {
    let store;

    beforeAll(() => {
      store = configureStore(rootStateMock, browserHistory);
    });

    it('should render and match the snapshot', () => {
      const {
        container: { firstChild },
      } = render(
        <Provider store={store}>
          <IntlProvider locale="en">
            <ConnectedReferAFriendForm />
          </IntlProvider>
        </Provider>,
      );
      expect(firstChild).toMatchSnapshot();
    });
  });

  describe('<ReferAFriendForm />', () => {
    const defaultProps = {
      handleEmailReferral: jest.fn(),
      referralIsPending: false,
      referralSucceeded: false,
      referralFailed: false,
      resetEmailReferralStatus: jest.fn(),
      referralErrorMsg: 'Error occured',
    };

    it('should render api send email errors', () => {
      const { getByText } = render(
        <IntlProvider locale="en">
          <ReferAFriendForm {...{ ...defaultProps, referralFailed: true }} />
        </IntlProvider>,
      );
      expect(getByText(defaultProps.referralErrorMsg)).toBeTruthy();
    });

    it('should render success message', () => {
      const { getByText } = render(
        <IntlProvider locale="en">
          <ReferAFriendForm {...{ ...defaultProps, referralSucceeded: true }} />
        </IntlProvider>,
      );
      expect(getByText('Referral email sent!')).toBeTruthy();
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const dispatchToProps = mapDispatchToProps(dispatch);
    const mockPayload = { email: mockEmail };

    it('handleEmailReferral', () => {
      dispatchToProps.handleEmailReferral(mockPayload);
      expect(dispatch).toHaveBeenCalledWith(sendReferralEmail(mockPayload));
    });

    it('resetEmailReferralStatus', () => {
      dispatchToProps.resetEmailReferralStatus();
      expect(dispatch).toHaveBeenCalledWith(resetReferralEmail());
    });
  });

  describe('mapStateToProps', () => {
    it('referral pending', () => {
      const rootState = {
        ...rootStateMock,
        ui: { ...uiStateMock, referralEmail: referralEmailPendingStateMock },
      };
      const wrapperState = mapStateToProps(rootState);
      expect(wrapperState).toMatchSnapshot();
    });

    it('referral error', () => {
      const rootState = {
        ...rootStateMock,
        ui: { ...uiStateMock, referralEmail: referralEmailSuccessStateMock },
      };
      const wrapperState = mapStateToProps(rootState);
      expect(wrapperState).toMatchSnapshot();
    });

    it('referral success', () => {
      const rootState = {
        ...rootStateMock,
        ui: { ...uiStateMock, referralEmail: referralEmailErrorStateMock },
      };
      const wrapperState = mapStateToProps(rootState);
      expect(wrapperState).toMatchSnapshot();
    });
  });
});
