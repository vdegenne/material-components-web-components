<!-- catalog-only-start --><!-- ---
name: Switch
dirname: switch
-----><!-- catalog-only-end -->

<catalog-component-header>
<catalog-component-header-title slot="title">

# Switch

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'lizmitchell' reviewed: '2023-08-02' }
tag: 'docType:reference'
*-->

<!-- no-catalog-start -->

<!-- go/md-switch -->

<!-- [TOC] -->

<!-- external-only-start -->
**This documentation is fully rendered on the
[Material Web catalog](https://material-web.dev/components/switch/).**
<!-- external-only-end -->

<!-- no-catalog-end -->

[Switches](https://m3.material.io/components/switch)<!-- {.external} --> toggle the state
of an item on or off.

</catalog-component-header-title>

<img
    class="hero"
    src="images/switch/hero.png"
    alt="Two switches on a settings page for Wi-Fi and Bluetooth. The first is on and the second is off."
    title="Switches on a settings page.">

</catalog-component-header>

*   [Design article](https://m3.material.io/components/switch) <!-- {.external} -->
*   API Documentation (*coming soon*)
*   [Source code](https://github.com/material-components/material-web/tree/main/switch)
    <!-- {.external} -->

<!-- catalog-only-start -->

<!--

## Interactive Demo

{% playgroundexample dirname=dirname %}

-->

<!-- catalog-only-end -->

## Usage

Switches are similar to checkboxes, and can be unselected or selected.

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-switch></md-checkbox>
<md-switch selected></md-switch>
```

### Icons

Icons can be used to visually emphasize the switch's selected state. Switches
can choose to display both icons or only selected icons.

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<md-switch icons></md-checkbox>
<md-switch icons selected></md-switch>

<md-switch icons show-only-selected-icon></md-checkbox>
<md-switch icons show-only-selected-icon selected></md-switch>
```

### Label

Associate a label with a switch using the `<label>` element.

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<label>
  Wi-Fi
  <md-switch selected></md-switch>
</label>

<label for="switch">Bluetooth</label>
<md-switch id="switch"></md-radio>
```

## Accessibility

Add an
[`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)<!-- {.external} -->
attribute to switches without labels or switches whose labels need to be more
descriptive.

```html
<md-switch aria-label="Lights"></md-switch>

<label>
  All
  <md-switch aria-label="All notifications"></md-switch>
</label>
```

> Note: switches are not automatically labelled by `<label>` elements and always
> need an `aria-label`. See b/294081528.

## Theming

Switches supports [Material theming](../theming.md) and can be customized in
terms of color and shape.

### Tokens

Token                               | Default value
----------------------------------- | ------------------------------------------
`--md-switch-handle-color`          | `--md-sys-color-outline`
`--md-switch-handle-shape`          | `9999px`
`--md-switch-track-color`           | `--md-sys-color-surface-container-highest`
`--md-switch-track-shape`           | `9999px`
`--md-switch-selected-handle-color` | `--md-sys-color-on-primary`
`--md-switch-selected-track-color`  | `--md-sys-color-primary`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-switch.scss)
    <!-- {.external} -->

### Example

<!-- no-catalog-start -->
<!-- TODO: add image -->
<!-- no-catalog-end -->
<!-- catalog-only-start -->

<!--

<div class="figure-wrapper">
  <figure
      style="justify-content:center;"
      aria-label="">
    TODO: update figure
  </figure>
</div>

-->

<!-- catalog-only-end -->

```html
<style>
  :root {
    /* System tokens */
    --md-sys-color-primary: #006a6a;
    --md-sys-color-on-primary: #ffffff;
    --md-sys-color-outline: #6f7979;
    --md-sys-color-surface-container-highest: #dde4e3;

    /* Component tokens */
    --md-switch-handle-shape: 0px;
    --md-switch-track-shape: 0px;
  }
</style>

<md-switch></md-switch>
<md-switch selected></md-switch>
```