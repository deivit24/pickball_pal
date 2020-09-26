import React from 'react';
import { render } from '@testing-library/react';
import AlertMsg from '../../components/layout/AlertMsg';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing AlertMsg

describe('Testing the AlertMsg', () => {
  it('it renders AlertMsg without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AlertMsg />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <AlertMsg />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
