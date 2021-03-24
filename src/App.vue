<template>
  <div id="app">
    <h1>My Library</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/wishlist">Wish List</router-link> |
      <router-link to="/readbooks">Read Books</router-link> |
      <router-link to="/reviews">Reviews</router-link>
    </div>
    <router-view />
    <div id="footer">
      <h2>Resources</h2>
        <ul>
          <li><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-carlosevelo">GitHub</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  display: grid;
  justify-items: center;
  margin-top: 15px;
}
#footer ul {
  text-decoration: none;
  list-style: none;
  padding: 0;
}
</style>
