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
import Books from "../components/Books.vue";
export default {
  name: "WishList",
  components: {
    Books,
  },
  data() {
    return {
      reviewpage: false,
      empty: true,
    }
  },
  computed: {
    books() {
      return this.$root.$data.books.filter((book) => {
        if (!book.isRead) {
          this.empty = false;
          return book;
        }
      });
    },
  }
}
</script>

<style scoped>
.wishlist {

}
</style>