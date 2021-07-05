import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { useInjectSaga } from 'utils/injectSaga';
import GlobalStyle from '../../global-styles';
import uiSaga from '../../store/ui/ui.saga';

const ParentDiv = styled.div`
  overflow: auto;
`;

export default function App() {
  useInjectSaga({ key: 'uiSaga', saga: uiSaga });
  return (
    <ParentDiv>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </ParentDiv>
  );
}
