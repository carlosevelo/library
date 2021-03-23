<template>
  <div class="readbooks">
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage"></Books>
  </div>
</template>

<script>
import Books from "../components/Books.vue";
export default {
  name: "ReadBooks",
  components: {
    Books,
  },
  data() {
    return {
      reviewpage: false 
    }
  },
  computed: {
    books() {
      return this.$root.$data.books.filter();
    }
  }
  }
</script>