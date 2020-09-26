import React from 'react';
import { render } from '@testing-library/react';
import CommentForm from '../../components/post/CommentForm';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing CommentForm

describe('Testing the CommentForm', () => {
  let postId = '0001';
  let color = 'white';
  it('it renders CommentForm without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CommentForm postId={postId} color={color} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CommentForm postId={postId} color={color} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
