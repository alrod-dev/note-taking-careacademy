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
import { defineComponent } from "vue";
import store from "@/store/index";
import { ActionTypes } from "@/store/modules/notes/actions";
import Note from "@/types/Note";
import NoteUI from "@/components/ui/NoteUI.vue";
import HeaderUI from "@/components/ui/HeaderUI.vue";
import FormUI from "@/components/ui/FormUI.vue";
import Modal from "@/components/ui/ModalUI.vue";

export default defineComponent({
  components: { NoteUI, HeaderUI, FormUI, Modal },
  setup() {
    if (localStorage.getItem("notes")) {
      store.dispatch(ActionTypes.GetNotes);
    }

    const Notes: Array<Note> = store.getters.allNotes || [];

    return { Notes };
  },
});
</script>

<style lang="scss"></style>
