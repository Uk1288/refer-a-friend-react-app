import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import Header from '../index';

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Header />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
