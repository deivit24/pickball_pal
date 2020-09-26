import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/navbar/Navbar';
import { MemoryRouter } from 'react-router';
import Logo from '../../assets/img/logo.png';
import HeaderLinks from '../../components/navbar/HeaderLinks';
import { Provider } from 'react-redux';
import store from '../../_helpers/store';

//Testing Navbar

describe('Testing the Navbar', () => {
  const color = 'white';

  const changeColorOnScroll = {
    height: 100,
    color: 'white',
  };

  const handleSubmit = () => {
    console.log('Testing Handle Submit');
  };
  it('it renders Navbar without crashing', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar
            color={color}
            brand={Logo}
            rightLinks={<HeaderLinks />}
            changeColorOnScroll={changeColorOnScroll}
          />
        </Provider>
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar
            color={color}
            brand={Logo}
            rightLinks={<HeaderLinks />}
            changeColorOnScroll={changeColorOnScroll}
          />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
