import React from 'react';
import { render } from '@testing-library/react';
import DashboardProfile from '../../components/dashboard/DashboardProfile';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing DashboardProfile

describe('Testing the DashboardProfile', () => {
  it('it renders DashboardProfile without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardProfile />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardProfile />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
