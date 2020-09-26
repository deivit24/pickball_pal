import React from 'react';
import { render } from '@testing-library/react';
import ProfileTop from '../../components/profile/ProfileTop';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing ProfileTop

describe('Testing the ProfileTop', () => {
  let social = {
    facebook: 'facebook.com',
    instagram: 'instagram.com',
    linkedin: 'linkedin.com',
  };

  it('it renders ProfileTop without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfileTop social={social} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfileTop social={social} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
