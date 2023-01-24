import { atom } from 'jotai';
import type { Description } from '../utils/types';
import { lightTheme } from '../utils/constants/theme';

const descriptions = atom<Description[]>([
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

export default descriptions;