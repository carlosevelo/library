<template>
  <div class="wishlist">
    <h2>Wishlist</h2>
    <div>
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage" @reload="getUnreadBooks"></Books>
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
  created() {
    this.getUnreadBooks();
  },
  methods: {
    async getUnreadBooks() {
      try {
        const response = await axios.get("/api/books/unread");
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

<style scoped>
.wishlist {

}
</style>