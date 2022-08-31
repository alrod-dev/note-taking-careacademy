<template>
  <div class="modal">
    <div class="content">
      <slot></slot>
      <span @click="closeModal" class="close">&times;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    // Emits call to have modal closed
    closeModal() {
      this.$root.$emit("closeModal");
    },
  },
});
</script>

<style lang="scss" scoped>
$bg-color: map-get($colors, black);
$border-color: map-get($colors, black);
$close-color: map-get($colors, grey);
$close-hover-color: map-get($colors, black);
$content-bg-color: map-get($colors, dark-grey);

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding: 0 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba($bg-color, 0.4);

  &.active {
    display: block;
  }

  .content {
    background-color: $content-bg-color;
    top: 25%;
    transform: translate(0, -25%);
    margin: auto;
    padding: 20px;
    border: 1px solid $border-color;
    border-radius: 5px;
    max-width: 500px;
    position: relative;

    .close {
      color: $close-color;
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 28px;
      font-weight: bold;

      &:hover,
      &:focus {
        color: $close-hover-color;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>
