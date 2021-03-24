<template>
  <div class="reviews">
    <h2>Reviews</h2>
    <div>
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage"></Books>
    </div>
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
      return this.$root.$data.books;
    }
  }
  }
</script>