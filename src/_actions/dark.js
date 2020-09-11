import { DARK_ON, DARK_OFF } from './types';

export const darkModeOn = () => {
  return {
    type: DARK_ON,
  };
};

export const darkModeOff = () => {
  return {
    type: DARK_OFF,
  };
};
