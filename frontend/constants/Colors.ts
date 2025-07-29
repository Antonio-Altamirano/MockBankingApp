/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const primary = '#002F6C'; //Used for headers, menus, and CTAs.
const secundary = '#004B9A'; //Lighter accent for buttons and highlights.
const highlights = '#FFC107'; //Used for highlights, CTAs, and celebration banners.
const light1 = '#FFFFFF';
const light2 ='#F5F5F5';
const light3 ='#777777';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    // text: '#ECEDEE',
    text: '#11181C',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary,
  secundary,
  highlights,
  light1,
  light2,
  light3
};
