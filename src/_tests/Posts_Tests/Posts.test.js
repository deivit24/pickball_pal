import React from 'react';
import { render } from '@testing-library/react';
import Posts from '../../components/posts/Posts';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Posts

describe('Testing the Posts', () => {
  it('it renders Posts without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Posts />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Posts />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
