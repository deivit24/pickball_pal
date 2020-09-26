import React from 'react';
import { render } from '@testing-library/react';
import MessageModal from '../../components/messages/MessageModal';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing MessageModal

describe('Testing the MessageModal', () => {
  const id = '0001';
  const messageMe = false;
  const display = '';
  const name = 'David Salazar';

  const handleSubmit = () => {
    console.log('Testing Handle Submit');
  };
  it('it renders MessageModal without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MessageModal
            id={id}
            handleSubmit={handleSubmit}
            name={name}
            display={display}
            messageMe={messageMe}
          />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <MessageModal
            id={id}
            handleSubmit={handleSubmit}
            name={name}
            display={display}
            messageMe={messageMe}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
