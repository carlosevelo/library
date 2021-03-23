<template>
  <div class="Books">
    <div class="book">
      <h2>{{book.title}}</h2>
      <p>{{book.author}}</p>
      <p>{{book.published}}</p>
      <p>{{book.genre}}</p>
      <p>{{book.pages}}</p>
      <button v-if="book.isRead" @click="readClick">
        <span>Mark as Unread</span>
      </button>
      <button v-else @click="readClick">
        <span>Mark as Read</span>
      </button>

      <div v-if="reviewpage">
        <p>{{book.review}}</p>
      </div>
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
    }
  }
}
</script>