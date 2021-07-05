import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const StyledSubHeader = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  @media only screen and (min-width: 600px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export default function SubHeader() {
  return (
    <StyledSubHeader>
      <FormattedMessage {...messages.subheader} />
    </StyledSubHeader>
  );
}
