import React from 'react';
import { render } from '@testing-library/react';
import DashboardPlaces from '../../components/dashboard/DashboardPlaces';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing DashboardPlaces

describe('Testing the DashboardPlaces', () => {
  it('it renders DashboardPlaces without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardPlaces />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardPlaces />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
