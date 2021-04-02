<template>
  <div class="addBook">
    <h2>Enter New Book Info</h2>
    <form class="newBook" name="newBook" @submit.prevent="handleNewBook">
      <label for="title">Book Title: </label>
      <input name="title" type="text" placeholder="Title" v-model="title"/>
      <label for="author">Book Author: </label>
      <input name="author" type="text" placeholder="Author" v-model="author"/>
      <label for="published">Year of Publication: </label>
      <input name="published" type="text" placeholder="Year" v-model="published"/>
      <label for="genre">Book Genre: </label>
      <!-- <input name="genre" type="text" placeholder="Genre" v-model="genre"/> -->
      <select name="genre" v-model="genre" placeholder="Genre">
        <option value="">Select One</option>
        <option value="Business & Personal Finance">Business & Personal Finance</option>
        <option value="Comics & Graphic Novels">Comics & Graphic Novels</option>
        <option value="Computers & Internet">Computers & Internet</option>
        <option value="Education">Education</option>
        <option value="Fiction & Literature">Fiction & Literature</option>
        <option value="Health, Mind & Body">Health, Mind & Body</option>
        <option value="History">History</option>
        <option value="Kids">Kids</option>
        <option value="Mysteries & Thrillers">Mysteries & Thrillers</option>
        <option value="Nonfiction">Nonfiction</option>
        <option value="Politics & Current Events">Politics & Current Events</option>
        <option value="Religion & Spirituality">Religion & Spirituality</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>
        <option value="Sports & Outdoors">Sports & Outdoors</option>
        <option value="Young Adult">Young Adult</option>
        <option value="Other">Other</option>


      </select>
      <label for="pages">Number of Pages: </label>
      <input name="pages" type="number" placeholder="#" v-model="pages"/>
      <label for="isRead">Have you already read this book? </label>
      <div>
        <input id="checkbox" name="isRead" type="checkbox" v-model="isRead">
        <span>Yes, I've read this book</span>
      </div>
      <label v-if="isRead" for="review">Enter a review of the book: </label>
      <input v-if="isRead" name="reveiw" type="text" placeholder="Enter a Review" v-model="review"/>
      <button><span>Submit</span></button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "AddBook",
  data() {
    return {
      title: "",
      author: "",
      published: "",
      genre: "",
      pages: "",
      isRead: false,
      review: "",
    }
  },
  methods: {
    async handleNewBook() {
      try {
        await axios.post("/api/books", {
          title: this.title,
          author: this.author,
          published: this.published,
          genre: this.genre,
          pages: this.pages,
          isRead: this.isRead,
          review: this.review, 
        });
      this.$router.push("/");
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.addBook {
  display: grid;
  justify-items: center;
}
.newBook {
  display: grid;
  width: 300px;
  justify-items: center;
}
.newBook label {
  margin: 5px;
}
.newBook input, select {
  width: 100px;
  text-align: center;
  margin: 5px;
}
.newBook button {
  margin-top: 10px;
  height: 30px;
  width: 70px;
}
#checkbox {
  width: 15px;
}
</style>