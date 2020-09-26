import React from 'react';
import { render } from '@testing-library/react';
import PostCard from '../../components/posts/PostCard';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing PostCard

describe('Testing the PostCard', () => {
  let showActions = true;
  let post = {
    _id: '00002',
    text: 'hey this is a comment',
    first_name: 'david',
    last_name: 'salazar',
    avatar:
      'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg',
    user: '00003',
    date: Date.now(),
    location: 'Austin, TX 78745',
    likes: 2,
    comments: 3,
  };
  it('it renders PostCard without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PostCard showActions={showActions} post={post} />
        </Provider>
      </MemoryRouter>
    );
  });

  // Wont work because there is a Date.now() and it changes from snapshot
  // it('matches snapshot', () => {
  //   const { asFragment } = render(
  //     <MemoryRouter>
  //       <Provider store={store}>
  //         <PostCard showActions={showActions} post={post} />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
