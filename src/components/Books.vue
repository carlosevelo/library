<template>
  <div class="Books">
    <div class="book">
      <h2>{{book.title}}</h2>
      <p>{{book.author}}</p>
      <p>{{book.published}}</p>
      <p>{{book.genre}}</p>
      <p>{{book.pages}} Pages</p>
      <div v-if="reviewpage">
        <p>{{book.review}}</p>
      </div>
      <button v-if="book.isRead" @click="readClick">
        <span>Mark as Unread</span>
      </button>
      <button v-else @click="readClick">
        <span>Mark as Read</span>
      </button>
      <button @click="deleteBook">
        <span>Delete Book</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  props: ["book", "reviewpage"],
  methods: {
    readClick() {
      return this.book.isRead = !this.book.isRead;
    },
    deleteBook() {
      return this.$root.$data.books.splice(this.$root.$data.books.indexOf(this.book), 1);
    }
  }
}
</script>

<style scoped>
.Books {
  display: grid;
  grid-gap: 10px;
  justify-items: center;
}
.book {
  margin: 15px;
  background-color: rgb(201, 201, 201);
  border-radius: 15px;
  width: 60%;
}
.book * {
  margin: 5px;
}
</style>