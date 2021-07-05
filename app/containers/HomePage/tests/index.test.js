import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import HomePage from '../index';
import { rootStateMock } from '../../../mocks/root.mock';

describe('<HomePage />', () => {
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
          <HomePage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
