<template>
  <form @submit.prevent="submitForm">
    <div class="form-input">
      <label>Title</label>
      <input type="text" placeholder="Title" v-model="form.title" />
    </div>
    <div class="form-input">
      <label>Description</label>
      <textarea
        placeholder="Add Note Description"
        v-model="form.description"
      ></textarea>
    </div>
    <div class="form-input errors" v-if="errors.length">
      <p>Please correct the following error(s):</p>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="form-input">
      <Button type="submit" value="Submit" class="raise green">Add Note</Button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/base/BaseButton.vue";

export default defineComponent({
  data() {
    return {
      errors: [],
      form: {
        title: "",
        description: "",
      },
    };
  },
  components: { Button },
  methods: {
    submitForm() {
      if (this.checkForm()) {
        return true;
      }
    },
    checkForm() {
      this.errors = [];

      if (!this.form.title) {
        this.errors.push("Title required.");
      }
      if (!this.form.description) {
        this.errors.push("Description required.");
      }

      if (!this.errors.length) {
        return true;
      }

      return false;
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
