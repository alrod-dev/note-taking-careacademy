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
$h1-mobile: map-get($h1-size, mobile);
$h1-tablet: map-get($h1-size, tablet);
$h1-desktop: map-get($h1-size, desktop);

.header {
  padding: 20px 15px;
  text-align: center;

  h1 {
    font-size: $h1-mobile;
    margin: 15px auto;
  }

  img {
    display: inline-block;
    width: 40px;
  }

  @include breakpoint(tablet) {
    padding: 40px 15px;

    h1 {
      font-size: $h1-tablet;
    }
  }

  @include breakpoint(desktop) {
    h1 {
      font-size: $h1-desktop;
    }
  }
}
</style>
