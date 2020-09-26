import React from 'react';
import { render } from '@testing-library/react';
import AddPlaces from '../../components/forms/AddPlaces';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing AddPlaces

describe('Testing the AddPlaces', () => {
  it('it renders AddPlaces without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddPlaces />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <AddPlaces />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
