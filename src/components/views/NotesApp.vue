<template>
  <div class="notes-app">
    <HeaderUI></HeaderUI>
    <NoteUI :Notes="Notes"></NoteUI>
    <Modal>
      <FormUI></FormUI>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Note from "@/types/Note";
import NoteUI from "@/components/ui/NoteUI.vue";
import HeaderUI from "@/components/ui/HeaderUI.vue";
import FormUI from "@/components/ui/FormUI.vue";
import Modal from "@/components/ui/ModalUI.vue";

export default defineComponent({
  components: { NoteUI, HeaderUI, FormUI, Modal },
  setup() {
    let Notes = ref<Note[]>();

    if (localStorage.getItem("notes")) {
      try {
        Notes = JSON.parse(localStorage.getItem("notes"));
      } catch (e) {
        console.log(e);
      }
    }

    return { Notes };
  },
});
</script>

<style lang="scss"></style>
