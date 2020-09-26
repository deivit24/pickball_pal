import React from 'react';
import { render } from '@testing-library/react';
import PrivateRoute from '../components/routing/PrivateRoute';
import NotFound404 from '../components/routing/NotFound404';
import Dashboard from '../components/dashboard/Dashboard';
import Routes from '../routes/Routes';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../_helpers/store';

//Testing Private Routes

describe('Testing the Private Routes', () => {
  it('it renders Private Routes without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// Testing Not Found Routes

describe('Testing the Not Found Routes', () => {
  it('it renders Not Found Routes without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NotFound404 />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <NotFound404 />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// Testing Routes

describe('Testing the Routes', () => {
  it('it renders Routes without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
