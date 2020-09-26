import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../../components/layout/Loading';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Loading

describe('Testing the Loading', () => {
  let type = 'spin';
  let color = '#3f50b5';
  it('it renders Loading without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Loading type={type} color={color} />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Loading type={type} color={color} />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
