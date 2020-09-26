import React from 'react';
import { render } from '@testing-library/react';
import HomeFooter from '../../components/layout/HomeFooter';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing HomeFooter

describe('Testing the HomeFooter', () => {
  it('it renders HomeFooter without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeFooter />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeFooter />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
