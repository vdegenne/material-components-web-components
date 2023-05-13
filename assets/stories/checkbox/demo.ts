/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './index.js';
import './material-collection.js';

import {KnobTypesToKnobs, MaterialCollection, materialInitsToStoryInits, setUpDemo} from './material-collection.js';
import {boolInput, Knob} from './index.js';

import {stories, StoryKnobs} from './stories.js';

const collection =
    new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>('Checkbox', [
      new Knob('checked', {defaultValue: false, ui: boolInput()}),
      new Knob('indeterminate', {defaultValue: false, ui: boolInput()}),
      new Knob('error', {defaultValue: false, ui: boolInput()}),
      new Knob('disabled', {defaultValue: false, ui: boolInput()}),
    ]);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection);
