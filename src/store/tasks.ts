import { atom } from 'jotai';
import type { Task } from '../utils/types';
import { PRIORITIES } from '../utils/constants';

export const tasks = atom<Task[]>([
  {
    id: 1,
    title: 'Lorem Ipsum has been the industry\'s standard dummy',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    date: new Date(),
    priority: PRIORITIES[0]
  },
  {
    id: 2,
    title: 'Lorem Ipsum has been the standard dummy',
    description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    date: new Date(),
    priority: PRIORITIES[1]
  },
]);