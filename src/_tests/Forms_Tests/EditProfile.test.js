import React from 'react';
import { render } from '@testing-library/react';
import EditProfile from '../../components/forms/EditProfile';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing EditProfile

describe('Testing the EditProfile', () => {
  it('it renders EditProfile without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EditProfile />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <EditProfile />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
