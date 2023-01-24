import { atom } from 'jotai';
import type { Description } from '../utils/types';
import { lightTheme } from '../utils/constants/theme';

export const textInput = atom<string>('');

export const descriptions = atom<Description[]>([
  {
    id: 1,
    text: 'Low',
    color: lightTheme.value.primary
  },
  {
    id: 2,
    text: 'Medium',
    color: lightTheme.value.warning
  },
]);