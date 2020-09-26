import React from 'react';
import { render } from '@testing-library/react';
import DashboardNav from '../../components/dashboard/DashboardNav';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing DashboardNav

describe('Testing the DashboardNav', () => {
  it('it renders DashboardNav without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardNav />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardNav />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
