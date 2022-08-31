<template>
  <form @submit.prevent="submitForm" @editModal="editNote">
    <div class="form-input">
      <input type="hidden" v-model="form.id" />
    </div>
    <div class="form-input">
      <label>Title</label>
      <input type="text" placeholder="Title" v-model="form.title" />
    </div>
    <div class="form-input">
      <label>Message</label>
      <textarea
        placeholder="Add Note Message"
        v-model="form.message"
      ></textarea>
    </div>
    <div class="form-input errors" v-if="errors.length">
      <p>Please correct the following error(s):</p>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="form-input">
      <Button type="submit" id="add-button" value="Submit" class="raise green"
        >Add Note</Button
      >
      <Button
        id="edit-button"
        @click.native.prevent="updateNote"
        class="raise green"
        >Update Note</Button
      >
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import { MutationType } from "@/store/modules/notes/mutations";
import Note from "@/types/Note";
import Button from "@/components/base/BaseButton.vue";

export default defineComponent({
  data() {
    return {
      errors: [],
      form: {
        id: "",
        title: "",
        message: "",
      },
    };
  },
  components: { Button },
  mounted() {
    this.$root.$on("editModal", (data: unknown) => {
      this.editNote(data);
    });

    this.$root.$on("createNewNote", () => {
      this.resetModal();
      this.openModal();
    });

    this.$root.$on("closeModal", () => {
      this.closeModal();
    });
  },
  methods: {
    // Checks form and Submits it
    submitForm() {
      if (this.checkForm()) {
        const note: Note = {
          id: Date.now(),
          title: this.form.title,
          message: this.form.message,
        };

        store.commit(MutationType.CreateNote, note);

        this.closeModal();
      }
    },
    editNote(noteValues: unknown) {
      this.form.id = noteValues.id;
      this.form.title = noteValues.title;
      this.form.message = noteValues.message;

      this.editModeModal();
      this.openModal();
    },
    updateNote() {
      if (this.checkForm()) {
        const note: Note = {
          id: this.form.id,
          title: this.form.title,
          message: this.form.message,
        };

        store.commit(MutationType.UpdateNote, note);

        this.closeModal();
      }
    },
    checkForm() {
      this.errors = [];

      if (!this.form.title) {
        this.errors.push("Title required.");
      }
      if (!this.form.message) {
        this.errors.push("Message required.");
      }

      if (!this.errors.length) {
        return true;
      }

      return false;
    },
    openModal() {
      const modal = document.querySelector(".modal");

      modal?.classList.add("active");
    },
    editModeModal() {
      const editBtn = document.querySelector(
        "#edit-button"
      ) as HTMLElement | null;
      const addBtn = document.querySelector(
        "#add-button"
      ) as HTMLElement | null;

      if (editBtn != null && addBtn != null) {
        editBtn.style.display = "inline-block";
        addBtn.style.display = "none";
      }
    },
    resetModal() {
      const editBtn = document.querySelector(
        "#edit-button"
      ) as HTMLElement | null;
      const addBtn = document.querySelector(
        "#add-button"
      ) as HTMLElement | null;

      if (editBtn != null && addBtn != null) {
        editBtn.style.display = "none";
        addBtn.style.display = "inline-block";
      }
    },
    closeModal() {
      const modal = document.querySelector(".modal");

      if (modal?.classList.contains("active")) {
        modal.classList.remove("active");
        this.form.id = "";
        this.form.title = "";
        this.form.message = "";

        this.resetModal();
      }
    },
  },
});
</script>

<style lang="scss">
form {
  max-width: 500px;
  margin: 0 auto;

  .form-input {
    width: 100%;
    margin: 15px auto;

    label,
    input,
    textarea {
      display: block;
      margin: 10px 0;
    }

    input,
    textarea {
      outline: none;
      display: block;
      background: rgba(255, 255, 255, 0.1);
      width: 100%;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 12px 20px;
      color: white;
      font-family: inherit;
      font-size: inherit;
      font-weight: 500;
      line-height: inherit;
      transition: 0.3s ease;
      font-size: 20px;
    }

    textarea {
      resize: none;
      width: 300px;
      height: 150px;
    }

    button {
      margin: 10px auto;
    }

    &.errors {
      font-size: 20px;
      color: red;
      line-height: 1.2;
    }
  }
}
</style>
