import React from 'react';
import { render } from '@testing-library/react';
import HomeMission from '../../components/layout/HomeMission';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing HomeMission

describe('Testing the HomeMission', () => {
  it('it renders HomeMission without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeMission />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeMission />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
