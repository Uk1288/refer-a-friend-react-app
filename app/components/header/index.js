import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const StyledHeader = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  margin: 100px 0px 40px;
  @media only screen and (min-width: 600px) {
    font-size: 48px;
    line-height: 64px;
    margin: 100px 0px 80px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <FormattedMessage {...messages.header} />
    </StyledHeader>
  );
}
