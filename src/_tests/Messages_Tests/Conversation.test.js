import React from 'react';
import { render } from '@testing-library/react';
import Conversation from '../../components/messages/Conversation';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Conversation

describe('Testing the Conversation', () => {
  let conversation = {
    _id: 'fsdgsdffgsdfg',
    message: 'This is a Test message',
    date_sent: Date.now(),
    sender_id: '00001',
    receiver_id: '00002',
    first_name: 'david',
    last_name: 'salazar',
    rec_first_name: 'killua',
    rec_last_name: 'zoldyck',
  };
  it('it renders Conversation without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Conversation conversation={conversation} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Conversation conversation={conversation} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
