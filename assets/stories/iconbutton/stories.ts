/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/icon/icon.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import '@material/web/iconbutton/standard-icon-button.js';

import {isRtl} from '@material/web/controller/is-rtl.js';
import {MaterialStoryInit} from './material-collection.js';
import {html, nothing} from 'lit';
import {ref} from 'lit/directives/ref.js';

/** Knob types for icon button stories. */
export interface StoryKnobs {
  icon: string;
  ariaLabel: string;
  href: string;
  target: string;
  selectedIcon: string;
  selectedAriaLabel: string;
  selected: boolean;
  disabled: boolean;
  flipIconInRtl: boolean;
}

const standard: MaterialStoryInit<StoryKnobs> = {
  name: '<md-standard-icon-button>',
  render(knobs) {
    const {icon, ariaLabel, disabled, flipIconInRtl} = knobs;
    return html`
      <md-standard-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-standard-icon-button>`;
  }
};
const link: MaterialStoryInit<StoryKnobs> = {
  name: '<md-standard-icon-button> link',
  render(knobs) {
    const {icon, ariaLabel, href, target, disabled, flipIconInRtl} = knobs;
    return html`
      <md-standard-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          .href="${href}"
          .target="${target}"
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-standard-icon-button>`;
  }
};
const toggle: MaterialStoryInit<StoryKnobs> = {
  name: '<md-standard-icon-button> toggle',
  render(knobs) {
    const {
      icon,
      ariaLabel,
      selectedIcon,
      selectedAriaLabel,
      selected,
      disabled,
    } = knobs;
    return html`
      <md-standard-icon-button
          toggle
          .disabled=${disabled}
          .selectedAriaLabel=${selectedAriaLabel}
          .ariaLabel=${ariaLabel}
          .selected=${selected}>
          ${
        selectedIcon ?
            html`<md-icon slot="selectedIcon">${selectedIcon}</md-icon>` :
            nothing}
        <md-icon>${icon}</md-icon>
      </md-standard-icon-button>`;
  }
};
const outlined: MaterialStoryInit<StoryKnobs> = {
  name: '<md-outlined-icon-button>',
  render(knobs) {
    const {icon, ariaLabel, disabled, flipIconInRtl} = knobs;
    return html`
      <md-outlined-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-outlined-icon-button>`;
  }
};
const outlinedLink: MaterialStoryInit<StoryKnobs> = {
  name: '<md-outlined-icon-button> link',
  render(knobs) {
    const {icon, ariaLabel, href, target, disabled, flipIconInRtl} = knobs;
    return html`
      <md-outlined-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          .href="${href}"
          .target="${target}"
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-outlined-icon-button>`;
  }
};
const outlinedToggle: MaterialStoryInit<StoryKnobs> = {
  name: '<md-outlined-icon-button> toggle',
  render(knobs) {
    const {
      icon,
      ariaLabel,
      selectedIcon,
      selectedAriaLabel,
      selected,
      disabled,
    } = knobs;
    return html`
      <md-outlined-icon-button
          toggle
          .disabled=${disabled}
          .selectedAriaLabel=${selectedAriaLabel}
          .ariaLabel=${ariaLabel}
          .selected=${selected}>
          ${
        selectedIcon ?
            html`<md-icon slot="selectedIcon">${selectedIcon}</md-icon>` :
            nothing}
        <md-icon>${icon}</md-icon>
      </md-outlined-icon-button>`;
  }
};
const filled: MaterialStoryInit<StoryKnobs> = {
  name: '<md-filled-icon-button>',
  render(knobs) {
    const {icon, ariaLabel, disabled, flipIconInRtl} = knobs;
    return html`
      <md-filled-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-filled-icon-button>`;
  }
};
const filledLink: MaterialStoryInit<StoryKnobs> = {
  name: '<md-filled-icon-button> link',
  render(knobs) {
    const {icon, ariaLabel, href, target, disabled, flipIconInRtl} = knobs;
    return html`
      <md-filled-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          .href="${href}"
          .target="${target}"
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-filled-icon-button>`;
  }
};
const filledToggle: MaterialStoryInit<StoryKnobs> = {
  name: '<md-filled-icon-button> toggle',
  render(knobs) {
    const {
      icon,
      ariaLabel,
      selectedIcon,
      selectedAriaLabel,
      selected,
      disabled,
    } = knobs;
    return html`
      <md-filled-icon-button
          toggle
          .disabled=${disabled}
          .selectedAriaLabel=${selectedAriaLabel}
          .ariaLabel=${ariaLabel}
          .selected=${selected}>
          ${
        selectedIcon ?
            html`<md-icon slot="selectedIcon">${selectedIcon}</md-icon>` :
            nothing}
          <md-icon>${icon}</md-icon>
      </md-filled-icon-button>`;
  }
};
const tonal: MaterialStoryInit<StoryKnobs> = {
  name: '<md-filled-tonal-icon-button>',
  render(knobs) {
    const {icon, ariaLabel, disabled, flipIconInRtl} = knobs;
    return html`
      <md-filled-tonal-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-filled-tonal-icon-button>`;
  }
};
const tonalLink: MaterialStoryInit<StoryKnobs> = {
  name: '<md-filled-tonal-icon-button> link',
  render(knobs) {
    const {icon, ariaLabel, href, target, disabled, flipIconInRtl} = knobs;
    return html`
      <md-filled-tonal-icon-button
          .ariaLabel=${ariaLabel}
          .disabled=${disabled}
          .flipIconInRtl=${flipIconInRtl}
          .href="${href}"
          .target="${target}"
          ${ref(rtlRefCallback(knobs))}>
        <md-icon>${icon}</md-icon>
      </md-filled-tonal-icon-button>`;
  }
};
const tonalToggle: MaterialStoryInit<StoryKnobs> = {
  name: '<md-filled-tonal-icon-button> toggle',
  render(knobs) {
    const {
      icon,
      ariaLabel,
      selectedIcon,
      selectedAriaLabel,
      selected,
      disabled,
    } = knobs;
    return html`
      <md-filled-tonal-icon-button
          toggle
          .disabled=${disabled}
          .selectedAriaLabel=${selectedAriaLabel}
          .ariaLabel=${ariaLabel}
          .selected=${selected}>
        ${
        selectedIcon ?
            html`<md-icon slot="selectedIcon">${selectedIcon}</md-icon>` :
            nothing}
        <md-icon>${icon}</md-icon>
      </md-filled-tonal-icon-button>`;
  }
};

// weakmap of elements to previous rtl knob value
const previousRtl =
    new WeakMap<Element, {lastRtl: boolean, lastFlipIconInRtl: boolean}>();

// This calls some underlying functions to force the element to recalculate its
// current RTL state whenever `flipIconInRtl` or `[dir]` changes.
function rtlRefCallback(knobs: StoryKnobs) {
  return (el: Element|undefined) => {
    if (!el) {
      return;
    }
    const {lastRtl, lastFlipIconInRtl} =
        previousRtl.get(el) ?? {lastRtl: null, lastFlipIconInRtl: null};
    const newRtl = (knobs as unknown as {'[dir=rtl]': boolean})['[dir=rtl]'];
    const newFlipIconInRtl = knobs.flipIconInRtl;

    if (lastRtl === newRtl && lastFlipIconInRtl === newFlipIconInRtl) {
      return;
    }

    previousRtl.set(el, {lastRtl: newRtl, lastFlipIconInRtl: newFlipIconInRtl});
    const castedEl =
        el as HTMLElement & {flipIcon: boolean, flipIconInRtl: boolean};
    castedEl.flipIcon = isRtl(castedEl, castedEl.flipIconInRtl);
  };
}

/** Icon Button stories. */
export const stories = [
  standard, link, toggle, outlined, outlinedLink, outlinedToggle, filled,
  filledLink, filledToggle, tonal, tonalLink, tonalToggle
];