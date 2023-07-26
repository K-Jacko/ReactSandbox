import {makeProject} from '@motion-canvas/core';

import intro from './scenes/iconintro?scene';
import uu from './scenes/unityunreal?scene';
import broll from './scenes/brollvideo?scene';
import goals from './scenes/goals?scene';
import goalcards from './scenes/goalcards?scene';
import techstack from './scenes/techstack?scene';

import './global.css';

export default makeProject({
  scenes: [intro,goalcards,uu]
});
