import React from 'react';
import { render } from '@testing-library/react';
import Profiles from '../../components/profiles/Profiles';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Profiles

describe('Testing the Profiles', () => {
  it('it renders Profiles without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Profiles />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Profiles />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
