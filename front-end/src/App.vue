<template>
  <div id="app">
    <h1>My Library</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/wishlist">Wish List</router-link> |
      <router-link to="/readbooks">Read Books</router-link> |
      <router-link to="/reviews">Reviews</router-link>
      <a v-if="user" @click="logout" href="/" id="logout">Logout</a>
    </div>
    <router-view v-if="user"/>
    <Login v-else />
    <div id="footer">
      <h2>Resources</h2>
      <ul>
        <li><a href="https://github.com/carlosevelo/library">GitHub</a></li>
      </ul>
      <h2>Number of Hours Spent: ~3.5</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Login from './components/Login.vue';
export default {
  components: { Login },
  name: "App",
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(232, 243, 255);
  padding-top: 10px;
}

#nav {
  padding: 30px;
  background-color: rgb(44, 44, 44);
}

#nav a {
  font-weight: bold;
  color: #c6e3ff;
}

#nav a.router-link-exact-active {
  color: #5ea4e9;
}

#logout {
  float: right;
  text-decoration: underline;
}

#footer {
  display: grid;
  justify-items: center;
  margin-top: 15px;
  background-color: rgb(44, 44, 44);
  color: azure;
  padding-bottom: 20px;
}
#footer ul {
  list-style: none;
  padding: 0;
  color: azure;
}
#footer a {
  color: #c6e3ff;  
}
</style>
