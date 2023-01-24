import { Dimensions } from 'react-native';
import type { Description } from '../types';
import { lightTheme } from './theme';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;

export const DESCRIPTIONS: Description[] = [
  {
    id: 1,
    text: 'Priorité',
    color: lightTheme.value.primary
  },
  {
    id: 2,
    text: 'Faible',
    color: lightTheme.value.success
  },
  {
    id: 3,
    text: 'Moyen',
    color: lightTheme.value.warning
  },
  {
    id: 4,
    text: 'Elevé',
    color: lightTheme.value.danger
  },
]