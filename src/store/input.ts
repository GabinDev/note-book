import { atom } from 'jotai';

export const textInputHeader = atom<string>('');
export const textFocusedHeader = atom<boolean>(false);