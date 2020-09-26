import React from 'react';
import { render } from '@testing-library/react';
import CreateProfile from '../../components/forms/CreateProfile';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing CreateProfile

describe('Testing the CreateProfile', () => {
  it('it renders CreateProfile without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CreateProfile />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CreateProfile />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
