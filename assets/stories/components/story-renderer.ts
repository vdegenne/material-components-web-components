import { Story } from '../story.js';
import {
  css,
  CSSResultGroup,
  CSSResultOrNative,
  html,
  LitElement,
  PropertyValues,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Renders a single story inside its own shadow root for style isolation.
 */
@customElement('story-renderer')
export class StoryRenderer extends LitElement {
  static override styles = [
    css`
      :host {
        display: inline-block;
      }
    `,
  ];
  @property({ attribute: false }) story?: Story = undefined;
  private storyRenderComplete: Promise<void> | undefined = undefined;

  override updated(propertiesChanged: PropertyValues) {
    super.updated(propertiesChanged);
    const story = this.story;
    if (story) {
      this.storyRenderComplete = story.render(this.renderRoot);
      this.storyRenderComplete.then(() => {
        story.knobs.connectWiring(this.renderRoot);
      });
    }
    if (story && story.styles && story.styles.length) {
      this.shadowRoot!.adoptedStyleSheets.push(...story.styles);
    }
  }
  override firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.addEventListener('web-story-update', (event: Event) => {
      event.stopPropagation();
      this.requestUpdate();
    });
  }

  override connectedCallback() {
    super.connectedCallback();
    const story = this.story;
    if (story) {
      story.knobs.addEventListener('changed', this.boundRequestUpdate);
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    const story = this.story;
    if (story) {
      story.knobs.removeEventListener('changed', this.boundRequestUpdate);
      story.knobs.disconnectWiring(this.renderRoot);
    }
  }

  dispose() {
    if (this.story) {
      this.story.dispose(this.renderRoot);
    }
  }

  private readonly boundRequestUpdate = () => {
    this.requestUpdate();
  };

  get renderComplete() {
    return (async () => {
      await this.updateComplete;
      await this.storyRenderComplete;
      await this.updateComplete;
    })();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'story-renderer': StoryRenderer;
  }
}
