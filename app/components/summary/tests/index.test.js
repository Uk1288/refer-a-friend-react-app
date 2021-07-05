import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import Summary from '../index';

describe('<Summary />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Summary />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
