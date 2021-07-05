import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const StyledSummary = styled.h1`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  max-width: 670px;
  text-align: center;
  margin: 30px 0px;
`;

export default function Summary() {
  return (
    <StyledSummary>
      <FormattedMessage {...messages.summary} />
    </StyledSummary>
  );
}
