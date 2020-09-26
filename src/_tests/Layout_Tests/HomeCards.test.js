import React from 'react';
import { render } from '@testing-library/react';
import HomeCards from '../../components/layout/HomeCards';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing HomeCards

describe('Testing the HomeCards', () => {
  it('it renders HomeCards without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeCards />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeCards />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
