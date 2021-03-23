<template>
  <div class="reviews">
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage"></Books>
  </div>
</template>

<script>
import Books from "../components/Books.vue";
export default {
  name: "Reviews",
  components: {
    Books,
  },
  data() {
    return {
      reviewpage: true 
    }
  },
  computed: {
    books() {
      return this.$root.$data.books.filter();
    }
  }
  }
</script>