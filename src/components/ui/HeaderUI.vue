<template>
  <Container class="header">
    <h1>
      The Legend of The Note Taking App
      <img src="@/assets/images/heart.svg" alt="Heart" />
    </h1>
    <Button @click.native="openModal" class="fill purple">Create Note</Button>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/base/BaseContainer.vue";
import Button from "@/components/base/BaseButton.vue";

export default defineComponent({
  components: { Container, Button },
  methods: {
    openModal() {
      this.$root.$emit("createNewNote");
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 0;
  text-align: center;

  h1 {
    font-size: 40px;
    margin: 15px auto;
  }

  img {
    display: inline-block;
    width: 40px;
  }
}
</style>
