import React from 'react';
import { render } from '@testing-library/react';
import CommentCard from '../../components/post/CommentCard';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing CommentCard

describe('Testing the CommentCard', () => {
  let postId = '0001';
  let comment = {
    _id: '00002',
    text: 'hey this is a comment',
    first_name: 'david',
    last_name: 'salazar',
    avatar:
      'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg',
    user: '00003',
    date: Date.now(),
  };
  it('it renders CommentCard without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CommentCard postId={postId} comment={comment} />
        </Provider>
      </MemoryRouter>
    );
  });

  // Wont work because there is a Date.now() and it changes from snapshot
  // it('matches snapshot', () => {
  //   const { asFragment } = render(
  //     <MemoryRouter>
  //       <Provider store={store}>
  //         <CommentCard postId={postId} comment={comment} />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
