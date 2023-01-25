import { atom } from 'jotai';
import type { Task } from '../utils/types';

export const tasks = atom<Task[]>([]);