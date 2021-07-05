import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import SubHeader from '../index';

describe('<SubHeader />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <SubHeader />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
