<template>
  <div class="reviews">
    <h2>Reviews</h2>
    <div>
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage" @reload="getReviewedBooks"></Books>
    </div>
    <div v-if="empty">
      <p>You have no reviews!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Books from "../components/Books.vue";
export default {
  name: "Reviews",
  components: {
    Books,
  },
  data() {
    return {
      books: [],
      reviewpage: true,
      empty: true
    }
  },
  created() {
    this.getReviewedBooks();
  },
  methods: {
    async getReviewedBooks() {
      try {
        const response = await axios.get("/api/books/reviewed");
        this.books = response.data;
        if (this.books.length == 0) {
          this.empty = true;
        }
        else {
          this.empty = false;
        }
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>