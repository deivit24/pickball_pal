import React from 'react';
import { render } from '@testing-library/react';
import HeaderLinks from '../../components/navbar/HeaderLinks';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing HeaderLinks

describe('Testing the HeaderLinks', () => {
  it('it renders HeaderLinks without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderLinks />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderLinks />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
