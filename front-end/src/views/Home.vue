<template>
  <div>
    <div>
      <div class="home">
        <h2>All Books</h2>
        <div class="addBook">
          <button @click="addBookView">
            <span>Add New Book</span>
          </button>
        </div>
        <Books v-for="book in books" :key="book.title" :book="book" :reviewpage="reviewpage" @reload="getAllBooks"></Books>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Books from '../components/Books.vue';
// import getAllBooks from './getAllBooks.js';
export default {
  name: "Home",
  components: {
    Books,
    // Login,
  },
  data() {
    return {
      books: [],
      reviewpage: false,
    }
  },
  async created() {
    if (this.$root.$data.user) {
      this.getAllBooks();
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
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