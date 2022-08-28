<template>
  <div class="notes-list">
    <ul>
      <li v-for="Note in Notes" :key="Note.id">
        <h3>{{ Note.title }}</h3>
        <p>{{ Note.description }}</p>
        <Button class="pulse yellow">Edit</Button>
        <Button class="close red">Delete</Button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Note from "@/types/Note";
import Button from "@/components/base/BaseButton.vue";

export default defineComponent({
  components: { Button },
  props: {
    Notes: {
      required: true,
      type: Array as PropType<Note[]>,
    },
  },
});
</script>

<style lang="scss"></style>
