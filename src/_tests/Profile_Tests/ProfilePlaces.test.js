import React from 'react';
import { render } from '@testing-library/react';
import ProfilePlaces from '../../components/profile/ProfilePlaces';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing ProfilePlaces

describe('Testing the ProfilePlaces', () => {
  let places = {
    name: 'St Stephens',
    location: '100 St STephens rd Austin TX ',
    id: '1000',
    lng: 986794234,
    lat: 23424322,
  };

  it('it renders ProfilePlaces without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfilePlaces places={places} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <ProfilePlaces places={places} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
