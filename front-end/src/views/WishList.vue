<template>
  <div class="wishlist">
    <h2>Wishlist</h2>
    <div>
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage"></Books>
    </div>
    <div v-if="empty">
      <p>You have no unread books!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Books from "../components/Books.vue";
export default {
  name: "WishList",
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

<style scoped>
.wishlist {

}
</style>