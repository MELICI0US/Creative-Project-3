<template>
  <div>
    <h1>Your Watchlist</h1>
    <div class="wrapper" v-if="watchlist.length != 0">
      <div class="watchlist">
        <div class="movie" v-for="movie in watchlist" :key="movie.id">
          <div class="info">
            <h1>{{ movie.title }}</h1>
            <h2>{{ movie.year }}, {{ movie.producer }}</h2>
          </div>
          <div class="image">
            <img :src="'https://picsum.photos/seed/' + movie.id + '/200/300'" />
          </div>
          <div class="wrap">
            <h3>{{ movie.genre }}</h3>
          </div>
          <div class="center">
            <button
              v-on:click.prevent="removeFromWatchlist(movie)"
              class="center"
            >
              Remove from List
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>It's empty!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Watchlist",

  data() {
    return {};
  },
  computed: {
    watchlist() {
      return this.$root.$data.watchlist;
    },
  },
  methods: {
    removeFromWatchlist(movie) {
      let watchlist = this.$root.$data.watchlist;
      let idx = watchlist.indexOf(movie);
      watchlist.splice(idx, 1);
    },
    count(movie) {
      let watchlist = this.$root.$data.watchlist;
      let count = 0;

      for (let i = 0; i < watchlist.length; i++) {
        if (watchlist[i].id == movie.id) {
          count++;
        }
      }

      return count;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.watchlist {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.movie img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.movie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f2921d;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

.center {
  text-align: center;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
}

h3 {
  font-size: 14px;
}
</style>


