import React from 'react';
import { render } from '@testing-library/react';
import DashboardPosts from '../../components/dashboard/DashboardPosts';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing DashboardPosts

describe('Testing the DashboardPosts', () => {
  it('it renders DashboardPosts without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardPosts />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DashboardPosts />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
