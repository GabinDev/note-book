import type { AppTheme } from '../types/Theme';

export const lightTheme: AppTheme = {
  theme: 'light',
  value: {
    primary: '#69A0F3',
    secondary: 'rgba(105, 160, 243, 0.83)',
    text: '#000000',
    success: '#339900',
    warning: '#FFCD06',
    danger: '#CC3300',
    variant1 : 'rgba(0,0,0,.05)',
    background: 'white',
    placeholder : 'rgba(0, 0, 0, .5)'
  }
}


export const darkTheme: AppTheme = {
  theme: 'dark',
  value: {
    primary: '#69A0F3',
    secondary: 'rgba(105, 160, 243, 0.83)',
    text: '#ECECEC',
    success: '#339900',
    warning: '#FFCD06',
    danger: '#CC3300',
    variant1 : 'rgba(255,255,255,.15)',
    background: '#000000',
    placeholder : 'rgba(255, 255, 255, .7)'
  }
}