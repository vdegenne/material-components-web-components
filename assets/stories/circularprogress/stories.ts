/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/button/tonal-button.js';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/circularprogress/circular-progress.js';

import {MdTonalButton} from '@material/web/button/tonal-button.js';
import {MdCircularProgress} from '@material/web/circularprogress/circular-progress.js';
import {MaterialStoryInit} from './material-collection.js';
import {css, html} from 'lit';


/** Knob types for circular-progress stories. */
export interface StoryKnobs {
  progress: number;
  indeterminate: boolean;
  fourColor: boolean;
  size: number;
  trackWidth: number;
}

const standard: MaterialStoryInit<StoryKnobs> = {
  name: 'Circular progress',
  render({progress, indeterminate, fourColor}) {
    return html`
      <md-circular-progress
          .progress=${progress}
          .indeterminate=${indeterminate}
          .fourColor=${fourColor}
      ></md-circular-progress>`;
  },
};
const iconButton: MaterialStoryInit<StoryKnobs> = {
  name: 'Containing an icon-button',
  styles: css`.aroundIcon {
        --md-circular-progress-size: 48px;
      }`,
  render({progress, indeterminate, fourColor}) {
    const toggle = ({target}: Event) => {
      const spinner =
          ((target as HTMLElement).parentElement as MdCircularProgress);
      spinner.indeterminate = !spinner.indeterminate;
    };

    return html`
      <md-circular-progress class="aroundIcon"
          .progress=${progress}
          .indeterminate=${indeterminate}
          .fourColor=${fourColor}
      >
        <md-standard-icon-button toggle @change=${toggle}>
          <span>play_arrow</span>
          <span slot="selectedIcon">pause</span>
        </md-standard-icon-button>
      </md-circular-progress>`;
  }
};
const insideButton: MaterialStoryInit<StoryKnobs> = {
  name: 'Inside a button',
  styles: css`.withSpinner {
        --md-circular-progress-size: 36px;
        --md-tonal-button-with-icon-spacing-trailing: 8px;
        width: 80px;
      }`,
  render({progress, indeterminate, fourColor}) {
    const loadTime = 2500;
    let loadTimeout = -1;
    const toggleLoad = (target: MdTonalButton) => {
      const spinner = target.firstElementChild as MdCircularProgress;
      const label = target.lastElementChild!;
      const shouldLoad = spinner.slot !== 'icon';
      spinner.indeterminate = true;
      label.slot = shouldLoad ? 'nothing' : '';
      spinner.slot = shouldLoad ? 'icon' : 'nothing';
      clearTimeout(loadTimeout);
      if (shouldLoad) {
        loadTimeout = setTimeout(() => {
          toggleLoad(target);
        }, loadTime);
      }
    };

    return html`
      <md-tonal-button class="withSpinner" @click=${
        ({currentTarget}: Event) => {
          toggleLoad(currentTarget as MdTonalButton);
        }}>
        <md-circular-progress slot="nothing"
            .progress=${progress}
            .indeterminate=${indeterminate}
            .fourColor=${fourColor}
        ></md-circular-progress>
        <span>Load</span>
      </md-tonal-button>`;
  }
};

/** Circular Progress stories. */
export const stories = [standard, iconButton, insideButton];
