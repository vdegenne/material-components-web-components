/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './index.js';
import './material-collection.js';

import {KnobTypesToKnobs, MaterialCollection, materialInitsToStoryInits, setUpDemo, title} from './material-collection.js';
import {boolInput, Knob, numberInput, textInput} from './index.js';

import {stories, StoryKnobs} from './stories.js';

/**
 * User avatar as a dataurl.
 */
export const AVATAR_URL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAAAAADH8yjkAAABsklEQVR4Ae3WBaLjMAxF0dn/np4hVEY3cQqOupNh/i4oVT76buAUEkmfzgOXgAS8QiABCUhAAg71dlsfhgJOc4vv2flpAICWGr/TS5IGQoV/qoIs0OX4r7wTBcZ40lgSqBGplgMoQ6SMxACPaF4MmCPaXAwoEa0UAyyiWTFAIZoSAwyiGTGgQLRCDJgh2kwMaBCtEQPIIpIluVnkEMkJDjuq8KSKJMd1eDLusiC70U45/ik/Se/kbqbwOzXrBrgqDtOfhJoeBrqLyLvl0nlKp2MCXi1Ap1Prndv59iQOdPVqkqu/J9FoWQcp4LguES1f7B8HaJPhStk6PASElcGN9CL0B9YKd6TWPYFjgTsrjn2ARuPudMMHdgqM1I4LtAqsVMsDyIKZJRawBLslC7BgZzlAQI8CA+gM2JmOAZy9AjPleY/pAswWZx5AFVhVxATOVIJRSfxZRAXurqA+07Qb4c5GXb99QAvc1YJ6bzSncTPtHtnJYYwbjcODV0WT40p5I3C21AUQr6iFDi8/M5HZM/OSp2O7HP+FmPGyHeD4Db5x261rfEjnewISkIAEJODDAV8A/z6x+ahJu3sAAAAASUVORK5CYII=';

/**
 * Example image as a dataurl.
 */
export const IMAGE_URL =
    'data:image/png;base64,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';

/**
 * One frame of the color blue in webm as a dataurl.
 *
 * Generated with
 * ffmpeg -f lavfi -i color=blue:s=1280x720 -vframes 1 ~/out.webm
 * cat ~/out.webm | base64 | tr -d '\n'
 */
export const VIDEO_URL =
    'data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAJrEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHYTbuMU6uEElTDZ1OsggEgTbuMU6uEHFO7a1OsggJV7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmsirXsYMPQkBNgI1MYXZmNTkuMjcuMTAwV0GNTGF2ZjU5LjI3LjEwMESJiEBEAAAAAAAAFlSua8OuAQAAAAAAADrXgQFzxYjFaDr5zFhASZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDgi7CCBQC6ggLQmoECElTDZ0CBc3OgY8CAZ8iaRaOHRU5DT0RFUkSHjUxhdmY1OS4yNy4xMDBzc9tjwItjxYjFaDr5zFhASWfIpUWjh0VOQ09ERVJEh5hMYXZjNTkuMzcuMTAwIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dUCo54EAo0CigQAAgIJJg0IAT/As9gA4JBwYShgAQGIMw/o6+kdo6+kAuaP9KgAAAAAcZw5Vl/m2cRY6ymCqlMFVJYKqSwVSleqUBBBCAAAAABxnDlWX+bZxFjrKYKqUwVUlgqpLBVKV6pQEEEIAAAAAHGcOVZf5tnEWOspgqpTBVSWCqksFUpXqlAQQQgBnDlWX+bZxFjrKYKqUwVUlgqpLBVKV6pQEEEIAHFO7a5G7j7OBALeK94EB8YIBp/CBAw==';

const collection =
    new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>('List', [
      new Knob('listTabIndex', {ui: numberInput(), defaultValue: 0}),

      new Knob('md-list-item', {ui: title()}),
      new Knob('disabled', {ui: boolInput(), defaultValue: false}),
      new Knob('active', {ui: boolInput(), defaultValue: false}),
      new Knob(
          'multiLineSupportingText', {ui: boolInput(), defaultValue: false}),
      new Knob('headline', {ui: textInput(), defaultValue: 'Headline'}),
      new Knob('supportingText', {ui: textInput(), defaultValue: ''}),
      new Knob('trailingSupportingText', {ui: textInput(), defaultValue: ''}),
      new Knob('itemTabIndex', {ui: numberInput(), defaultValue: 0}),

      new Knob('data-variant=icon', {ui: title()}),
      new Knob('start icon', {ui: textInput(), defaultValue: 'account_circle'}),
      new Knob('end icon', {ui: textInput(), defaultValue: 'check_circle'}),


      new Knob('data-variant=link', {ui: title()}),
      new Knob('href', {ui: textInput(), defaultValue: 'https://google.com'}),
      new Knob('target', {ui: textInput(), defaultValue: '_blank'}),
      new Knob('link end icon', {ui: textInput(), defaultValue: 'open_in_new'}),

      new Knob('data-variant=avatar', {ui: title()}),
      new Knob('avatar img', {ui: textInput(), defaultValue: AVATAR_URL}),
      new Knob('avatar label', {ui: textInput(), defaultValue: 'EM'}),

      new Knob('data-variant=image', {ui: title()}),
      new Knob('image', {ui: textInput(), defaultValue: IMAGE_URL}),

      new Knob('data-variant=video', {ui: title()}),
      new Knob(
          'data-variant=video-large', {ui: boolInput(), defaultValue: false}),
      new Knob('video src', {ui: textInput(), defaultValue: VIDEO_URL}),
    ]);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection, {fonts: 'roboto', icons: 'material-symbols'});
