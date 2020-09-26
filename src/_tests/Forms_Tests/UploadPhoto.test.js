import React from 'react';
import { render } from '@testing-library/react';
import UploadPhoto from '../../components/forms/UploadPhoto';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing UploadPhoto

describe('Testing the UploadPhoto', () => {
  it('it renders UploadPhoto without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <UploadPhoto />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <UploadPhoto />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
