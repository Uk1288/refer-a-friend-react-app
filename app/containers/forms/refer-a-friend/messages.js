import { defineMessages } from 'react-intl';

export const scope = 'app.components.Summary';

export default defineMessages({
  emailText: {
    id: `${scope}.emailText`,
    defaultMessage: 'Enter email address',
  },
  sendText: {
    id: `${scope}.sendText`,
    defaultMessage: 'Send',
  },
  emailSentSuccess: {
    id: `${scope}.emailSentSuccess`,
    defaultMessage: 'Referral email sent!',
  },
});
