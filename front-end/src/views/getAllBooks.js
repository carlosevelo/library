import axios from 'axios';
export default {
  name: "getAllBooks",
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get("/api/books");
        return response.data;
      } catch(error) {
        console.log(error);
      }
    },
  }
}