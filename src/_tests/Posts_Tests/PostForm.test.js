import React from 'react';
import { render } from '@testing-library/react';
import PostForm from '../../components/posts/PostForm';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing PostForm

describe('Testing the PostForm', () => {
  it('it renders PostForm without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PostForm />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <PostForm />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
