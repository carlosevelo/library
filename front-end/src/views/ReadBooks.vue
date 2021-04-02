<template>
  <div class="readbooks">
    <h2>Read Books</h2>
    <div>
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage"></Books>
    </div>
    <div v-if="empty">
      <p>You have no read books!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Books from "../components/Books.vue";
export default {
  name: "ReadBooks",
  components: {
    Books,
  },
  data() {
    return {
      books: [],
      reviewpage: false,
      empty: true,
    }
  },
  created() {
    this.getAllBooks();
  },
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get("/api/books");
        this.books = response.data;
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>