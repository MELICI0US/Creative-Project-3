<template>
  <div id="app">
    <div id="content-wrap">
      <div id="nav">
        <router-link to="/">Browse</router-link> |
        <router-link to="/search">Search</router-link> |
        <router-link to="/watchlist"
          >Watchlist ({{ this.$root.$data.watchlist.length }})</router-link
        >
      </div>
      <router-view />
    </div>
    <footer>
      <a href="https://github.com/MELICI0US/Creative-Project-3.git"
        >Github Repository</a
      >
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 97vh;
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

#content-wrap {
  padding-bottom: 2.5rem;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer a {
  color: #363946;
  text-decoration: none;
  float: left;
}

footer a:hover {
  color: rgb(83, 83, 83);
  text-decoration: none;
}
</style>
