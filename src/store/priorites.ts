import { atom } from 'jotai';
import type { Priority } from '../utils/types';

export const selected = atom<Priority | undefined>(undefined);