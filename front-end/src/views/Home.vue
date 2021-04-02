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
import axios from 'axios';
import Books from '../components/Books.vue';
export default {
  name: "Home",
  components: {
    Books,
  },
  data() {
    return {
      books: [],
      reviewpage: false,
    }
  },
  created() {
    this.getAllBooks();
  },
  methods: {
    addBookView() {
      return this.$router.push("/addBook");
    },
    async getAllBooks() {
      try {
        const response = await axios.get("/api/books");
        this.books = response.data;
      } catch(error) {
        console.log(error);
      }
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