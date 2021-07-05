import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/index';
import SubHeader from '../../components/subheader/index';
import Summary from '../../components/summary/index';
import ReferAFriendForm from '../forms/refer-a-friend/index';
import LogoLoader from '../../components/logo-loader/index';

const ParentDiv = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 260px;
`;

export default function HomePage() {
  return (
    <ParentDiv>
      <Header />
      <SubHeader />
      <Summary />
      <ReferAFriendForm />
      <LogoLoader />
    </ParentDiv>
  );
}
