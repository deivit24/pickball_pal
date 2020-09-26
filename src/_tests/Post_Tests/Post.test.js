import React from 'react';
import { render } from '@testing-library/react';
import Post from '../../components/post/Post';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Post

describe('Testing the Post', () => {
  it('it renders Post without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Post />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Post />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
