<template>
  <h1 class="red">{{message}}</h1>
</template>

<style scoped>
.red {
  color: red;
}
</style>

<script>
export default {
  data: () => ({
    message: "i am a child comp",
  }),
};
</script>