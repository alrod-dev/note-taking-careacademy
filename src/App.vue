<template>
  <div id="app">
    <h1>Note Taking App - CareAcademy</h1>
    <NotesApp></NotesApp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotesApp from "@/components/views/NotesApp.vue";

export default defineComponent({
  name: "App",
  components: { NotesApp },
});
</script>

<style lang="scss"></style>
