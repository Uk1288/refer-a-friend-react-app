import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import LogoLoader from '../index';

describe('<LogoLoader />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <LogoLoader />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
