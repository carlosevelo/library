<template>
  <div class="Books">
    <div class="book">
      <h2>{{book.title}}</h2>
      <p><strong>{{book.author}}</strong></p>
      <div class="info">
        <div class="published">
          <p><strong>Published</strong></p>
          <p>{{book.published}}</p>
        </div>
        <div class="genre">
          <p><strong>Genre</strong></p>
          <p>{{book.genre.name}}</p>
        </div>
        <div class="pages">
          <p><strong>Pages</strong></p>
          <p>{{book.pages}} Pages</p>
        </div>
      </div>
      <div v-if="reviewpage">
        <p>{{book.review}}</p>
      </div>
      <button v-if="book.isRead" @click="readClick(book)">
        <span>Mark as Unread</span>
      </button>
      <button v-else @click="readClick(book)">
        <span>Mark as Read</span>
      </button>
      <button @click="deleteBook(book)">
        <span>Delete Book</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Books",
  props: ["book", "reviewpage"],
  data() {
    return {
      edit: false,
      genre: "",
    }
  },
  methods: {
    async readClick(book) {
      try {
        await axios.put(`/api/books/${book._id}`, {
          isRead: !book.isRead,
        });
        this.$emit('reload');
      } catch(error) {
        console.log(error);
      }
    },
    async deleteBook(book) {
      try {
        await axios.delete(`/api/books/${book._id}`);
        this.$emit('reload');
      } catch(error) {
        console.log(error);
      }    
    },
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
  display: grid;
  justify-items: center;
}
.book * {
  margin: 5px;
}
.info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.published {
  grid-column: 1/2;
  border-right: 1px solid black;
}
.genre {
  grid-column: 2/3;
}
.pages {
  grid-column: 3/4;
  border-left: 1px solid black;
}
</style>