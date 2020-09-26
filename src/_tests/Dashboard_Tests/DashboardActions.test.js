import React from 'react';
import { render } from '@testing-library/react';
import DashboardActions from '../../components/dashboard/DashboardActions';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing DashboardActions

describe('Testing the DashboardActions', () => {
  it('it renders DashboardActions without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardActions />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardActions />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
