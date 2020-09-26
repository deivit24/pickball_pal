import React from 'react';
import { render } from '@testing-library/react';
import ProfileBody from '../../components/profile/ProfileBody';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing ProfileBody

describe('Testing the ProfileBody', () => {
  let avatar =
      'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg',
    first_name = 'david',
    last_name = 'salazar',
    bio = 'this is a shiowrt bio',
    playing_style = 'i play hard',
    active = true,
    gender = 'male',
    level = 3.0;

  it('it renders ProfileBody without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfileBody
            avatar={avatar}
            first_name={first_name}
            last_name={last_name}
            bio={bio}
            playing_style={playing_style}
            active={active}
            gender={gender}
            level={level}
          />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfileBody
            avatar={avatar}
            first_name={first_name}
            last_name={last_name}
            bio={bio}
            playing_style={playing_style}
            active={active}
            gender={gender}
            level={level}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
