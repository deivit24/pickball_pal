import React from 'react';
import { render } from '@testing-library/react';
import Register from '../../components/auth/Register';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Register

describe('Testing the Register', () => {
  it('it renders Register without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
