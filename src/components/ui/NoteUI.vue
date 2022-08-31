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
    // Send Note ID to the store for the specifc Note to be deleted
    deleteNote(event: { target: { name: unknown } }) {
      const id = event.target.name;

      store.commit(MutationType.DeleteNote, id);
    },
    // Emits signal to the Modal to open and pass these specific values to be edited
    editNote(event: { target: { name: unknown } }) {
      const id = event.target.name;

      const noteItem = this.Notes.find((item) => item.id == id);

      this.$root.$emit("editModal", noteItem);
    },
  },
});
</script>

<style lang="scss">
$li-bg-color: map-get($colors, medium-grey);
$p-mobile: map-get($paragraph-size, mobile);
$p-tablet: map-get($paragraph-size, tablet);
$p-desktop: map-get($paragraph-size, desktop);
$h3-mobile: map-get($h3-size, mobile);
$h3-tablet: map-get($h3-size, tablet);
$h3-desktop: map-get($h3-size, desktop);

.notes-list {
  max-width: 800px;
  max-height: 750px;
  overflow: scroll;
  text-align: center;
  margin: 10px auto;

  ul {
    li {
      padding: 20px;
      margin: 15px auto;
      border-radius: 10px;
      background-color: rgba($li-bg-color, 0.95);

      h3 {
        font-size: $h3-mobile;
      }

      img {
        width: 40px;
        margin: 10px auto;
      }

      p {
        font-size: $p-mobile;
        margin: 15px auto;
        max-width: 500px;
      }
    }
  }

  @include breakpoint(tablet) {
    ul {
      li {
        h3 {
          font-size: $h3-tablet;
        }

        p {
          font-size: $p-tablet;
        }
      }
    }
  }

  @include breakpoint(desktop) {
    ul {
      li {
        h3 {
          font-size: $h3-desktop;
        }

        p {
          font-size: $p-desktop;
        }
      }
    }
  }
}
</style>
