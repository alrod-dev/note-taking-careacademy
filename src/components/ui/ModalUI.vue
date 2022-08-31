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
    closeModal() {
      const modal = document.querySelector(".modal");

      if (modal?.classList.contains("active")) {
        modal.classList.remove("active");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  &.active {
    display: block;
  }

  .content {
    background-color: #494b4b;
    margin: auto;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    max-width: 500px;
    position: relative;

    .close {
      color: #aaaaaa;
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 28px;
      font-weight: bold;

      &:hover,
      &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>
