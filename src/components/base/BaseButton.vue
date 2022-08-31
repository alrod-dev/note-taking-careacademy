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
  text-transform: uppercase;
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
    &:hover {
      animation: pulse 1s;
      box-shadow: 0 0 0 2em transparent;
    }
  }

  &.close {
    &:hover {
      box-shadow: inset -4em 0 0 0 var(--hover), inset 4em 0 0 0 var(--hover);
    }
  }

  &.raise {
    &:hover {
      box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
      transform: translateY(-0.25em);
    }
  }

  &.fill {
    &:hover {
      box-shadow: inset 0 0 0 2em var(--hover);
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}
</style>
