<template>
  <div>
     <h1>{{message}}</h1>

     <Child></Child>
  </div>
</template>

<style scoped>
</style>

<script>
import Child from './Child.vue'

export default {
  components: {Child}
  , data: () => ({
    message: "hey rodey",
  }),
};
</script>