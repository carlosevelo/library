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
      books: [],
      reviewpage: true 
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
}
</script>