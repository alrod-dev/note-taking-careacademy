<template>
  <Container>
    <NoteUI :Notes="Notes"></NoteUI>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Container from "@/components/base/BaseContainer.vue";
import NoteUI from "@/components/ui/NoteUI.vue";
import Note from "@/types/Note";

export default defineComponent({
  components: { Container, NoteUI },
  setup() {
    const Notes = ref<Note[]>([
      {
        title: "Title 1",
        description:
          "Spicy jalapeno bacon ipsum dolor amet ground round bacon jowl aliqua aliquip shoulder chislic est capicola nulla frankfurter sausage id cillum.",
        id: 1,
      },
      {
        title: "Title 2",
        description:
          "Spicy jalapeno bacon ipsum dolor amet ground round bacon jowl aliqua aliquip shoulder chislic est capicola nulla frankfurter sausage id cillum.",
        id: 2,
      },
      {
        title: "Title 3",
        description:
          "Spicy jalapeno bacon ipsum dolor amet ground round bacon jowl aliqua aliquip shoulder chislic est capicola nulla frankfurter sausage id cillum.",
        id: 3,
      },
    ]);

    return { Notes };
  },
});
</script>

<style lang="scss"></style>
