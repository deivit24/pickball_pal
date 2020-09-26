import React from 'react';
import { render } from '@testing-library/react';
import DashboardCard from '../../components/dashboard/DashboardCard';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing DashboardCard

describe('Testing the DashboardCard', () => {
  let name = 'Test Test';
  let avatar =
    'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg';
  it('it renders DashboardCard without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardCard name={name} avatar={avatar} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardCard name={name} avatar={avatar} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
