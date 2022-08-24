<template>
  <div id="app">
    <NotesItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NotesItem from "@/components/NotesItem";

export default Vue.extend({
  name: "App",
  components: { NotesItem },
});
</script>

<style lang="scss"></style>
