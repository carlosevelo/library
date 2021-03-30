<template>
  <div class="home">
    <h2>All Books</h2>
    <div class="addBook">
      <button @click="addBookView">
        <span>Add New Book</span>
      </button>
    </div>
    <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage"></Books>
  </div>
</template>

<script>
import Books from '../components/Books.vue';
export default {
  name: "Home",
  components: {
    Books,
  },
  data() {
    return {
      books: this.$root.$data.books,
      reviewpage: false,
    }
  },
  methods: {
    addBookView() {
      return this.$router.push("/addBook");
    }
  }
};
</script>

<style scoped>
.home {

}
.addBook {

}
.addBook button {
  height: 35px;
  width: 110px;
}
</style>