<template>
  <Container>
    <div class="notes-list">
      <ul>
        <li v-for="Note in Notes" :key="Note.id">
          <img src="@/assets/images/rupee.svg" alt="Rupee" />
          <h3>{{ Note.title }}</h3>
          <p>{{ Note.message }}</p>
          <Button @click.native="editNote" :name="Note.id" class="pulse yellow"
            >Edit</Button
          >
          <Button @click.native="deleteNote" :name="Note.id" class="close red"
            >Delete</Button
          >
        </li>
      </ul>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import store from "@/store";
import { MutationType } from "@/store/modules/notes/mutations";
import Note from "@/types/Note";
import Container from "@/components/base/BaseContainer.vue";
import Button from "@/components/base/BaseButton.vue";

export default defineComponent({
  components: { Button, Container },
  props: {
    Notes: {
      required: true,
      type: Array as PropType<Note[]>,
    },
  },
  methods: {
    deleteNote(event: { target: { name: unknown } }) {
      const id = event.target.name;

      store.commit(MutationType.DeleteNote, id);
    },
    editNote(event: { target: { name: unknown } }) {
      const id = event.target.name;

      const noteItem = this.Notes.find((item) => item.id == id);

      this.$root.$emit("editModal", noteItem);
    },
  },
});
</script>

<style lang="scss">
.notes-list {
  max-width: 800px;
  text-align: center;
  margin: 10px auto;
  overflow: scroll;
  max-height: 750px;

  ul {
    li {
      padding: 20px;
      margin: 15px auto;
      border-radius: 10px;
      background-color: rgba(128, 128, 128, 0.95);

      h3 {
        font-size: 30px;
      }

      img {
        width: 40px;
        margin: 10px auto;
      }

      p {
        font-size: 18px;
        margin: 15px auto;
        max-width: 500px;
      }
    }
  }
}
</style>

function emit(arg0: string, noteItem: Note|undefined) { throw new
Error("Function not implemented."); }
