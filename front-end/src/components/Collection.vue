<template>
  <div class="collection" @click.prevent="handleClick(collection)">
    <h1> {{ collection.name }} </h1>
  </div>
</template>

<script>
export default {
  name: "Collection",
  props: [collection],
  data() {
    return {

    }
  },
  methods: {
    async handleClick(collection) {
      try {

      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>

</style>