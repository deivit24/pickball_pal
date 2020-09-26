import React from 'react';
import { render } from '@testing-library/react';
import ProfileCard from '../../components/profiles/ProfileCard';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing ProfileCard

describe('Testing the ProfileCard', () => {
  let profile = {
    user: {
      _id: '001',
      first_name: 'david',
      last_name: 'salazar',
      avatar:
        'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg',
    },
    location: 'Austin, TX 78745',
    level: 3.0,
    active: true,
  };

  it('it renders ProfileCard without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfileCard profile={profile} />
        </Provider>
      </MemoryRouter>
    );
  });
  // Wont work because there is a Date.now() and it changes from snapshot
  // it('matches snapshot', () => {
  //   const { asFragment } = render(
  //     <MemoryRouter>
  //       <Provider store={store}>
  //         <ProfileCard />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
