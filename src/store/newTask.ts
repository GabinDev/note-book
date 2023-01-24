import { atom } from 'jotai';

export const textInput = atom<string>('');
export const textFocused = atom<boolean>(false);