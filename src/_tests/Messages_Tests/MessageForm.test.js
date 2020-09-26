import React from 'react';
import { render } from '@testing-library/react';
import MessageForm from '../../components/messages/MessageForm';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing MessageForm

describe('Testing the MessageForm', () => {
  let replyId = '0001';
  const handleClose = () => {
    console.log('Testing Handle Close');
  };
  it('it renders MessageForm without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MessageForm replyId={replyId} handleClose={handleClose} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <MessageForm replyId={replyId} handleClose={handleClose} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
