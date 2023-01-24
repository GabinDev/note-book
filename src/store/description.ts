import { atom } from 'jotai';
import type { Description } from '../utils/types';
import { DESCRIPTIONS } from '../utils/constants';

export const textInput = atom<string>('');

export const descriptions = atom<Description[]>(DESCRIPTIONS);