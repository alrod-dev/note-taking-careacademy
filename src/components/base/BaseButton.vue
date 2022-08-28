<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss">
button {
  background: none;
  border: 2px solid;
  color: var(--color);
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  transition: 0.25s;
  cursor: pointer;

  //Colors
  //Variables come from _variables.scss file
  @each $button, $color in $colors {
    &.#{$button} {
      --color: #{$color};
      --hover: #{$color};
    }
  }

  &:hover,
  &:focus {
    border-color: var(--color);
  }

  //Animations
  &.pulse {
    // Animate the size, outside
    &:hover,
    &:focus {
      animation: pulse 1s;
      box-shadow: 0 0 0 2em transparent;
    }
  }

  &.close {
    &:hover,
    &:focus {
      box-shadow: inset -3.5em 0 0 0 var(--hover),
        inset 3.5em 0 0 0 var(--hover);
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}
</style>
