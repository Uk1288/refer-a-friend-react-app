import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import messages from './messages';
import { APP_GREY_04 } from '../../../constants/color-constants';
import {
  sendReferralEmail,
  resetReferralEmail,
} from '../../../store/ui/ui.action';
import {
  isReferralPending,
  isReferralSuccess,
  isReferralFailure,
  getReferralErrorMsg,
} from '../../../store/ui/ui.selector';
import StyledButton from '../../../components/button/index';
import StyledInput from '../../../components/input/index';
import StyledErrorText from '../../../components/error-text/index';
import StyledSuccessText from '../../../components/success-text';

const StyledEmailText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  color: ${APP_GREY_04};
`;

const StyledInputBox = styled.div`
  position: relative;
`;

const validationSchema = yup.object({
  email: yup
    .string('Enter email address')
    .email('Enter a valid email')
    .required('Email is required'),
});

const initialValues = {
  email: '',
};

export const ReferAFriendForm = function ReferAFriendForm({
  handleEmailReferral,
  referralIsPending,
  referralSucceeded,
  referralFailed,
  resetEmailReferralStatus,
  referralErrorMsg,
}) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => handleEmailReferral(values),
  });

  /**
   * clear the input after referral email has been sent successfully
   * so that user can type the next email address
   */
  useEffect(() => {
    if (referralSucceeded) {
      formik.resetForm(initialValues);
    }
  }, [referralSucceeded]);

  /**
   * after email sent error or success state, reset the sending status to initial
   * so that user can correct email address or enter a new address and resend
   */
  const resetEmailReferralStatusOnInputChange = () => {
    if (referralSucceeded || referralFailed) {
      resetEmailReferralStatus();
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <StyledEmailText>
          <FormattedMessage {...messages.emailText} />
        </StyledEmailText>
        <StyledInputBox>
          <StyledInput
            id="email"
            name="email"
            value={formik.values.email}
            onChange={event => {
              resetEmailReferralStatusOnInputChange();
              formik.handleChange(event);
            }}
            onBlur={event => {
              resetEmailReferralStatusOnInputChange();
              formik.handleBlur(event);
            }}
          />
          <StyledButton type="submit" disabled={referralIsPending}>
            <FormattedMessage {...messages.sendText} />
          </StyledButton>
        </StyledInputBox>
        {formik.touched.email && Boolean(formik.errors.email) && (
          <StyledErrorText>{formik.errors.email}</StyledErrorText>
        )}
        {referralFailed && referralErrorMsg && (
          <StyledErrorText id="referral-error-msg">
            {referralErrorMsg}
          </StyledErrorText>
        )}
        {referralSucceeded && (
          <StyledSuccessText id="referral-success-msg">
            <FormattedMessage {...messages.emailSentSuccess} />
          </StyledSuccessText>
        )}
      </form>
    </div>
  );
};

ReferAFriendForm.propTypes = {
  handleEmailReferral: PropTypes.func.isRequired,
  resetEmailReferralStatus: PropTypes.func.isRequired,
  referralIsPending: PropTypes.bool.isRequired,
  referralSucceeded: PropTypes.bool.isRequired,
  referralFailed: PropTypes.bool.isRequired,
  referralErrorMsg: PropTypes.string,
};

export const mapDispatchToProps = dispatch => ({
  handleEmailReferral: payload => dispatch(sendReferralEmail(payload)),
  resetEmailReferralStatus: () => dispatch(resetReferralEmail()),
});

export const mapStateToProps = state => ({
  referralIsPending: isReferralPending(state),
  referralSucceeded: isReferralSuccess(state),
  referralFailed: isReferralFailure(state),
  referralErrorMsg: getReferralErrorMsg(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReferAFriendForm);
