import { atom } from 'recoil';

const useDarkTheme = atom({
  key: 'useDarkTheme',
  default: false
});

export { useDarkTheme };
