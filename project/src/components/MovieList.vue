<template>
  <div class="wrapper">
    <div class="movies">
      <div class="movie" v-for="movie in movies" :key="movie.id">
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
        <div class="price">
          <button v-on:click.prevent="addToWatchlist(movie)" class="auto">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    movies: Array,
  },
  methods: {
    addToWatchlist(movie) {
      let watchlist = this.$root.$data.watchlist;
      if (!watchlist.includes(movie)) {
        watchlist.push(movie);
      }
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

.movies {
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
  background: rgb(87, 155, 87);
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
  text-align: center;
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

.wrap {
  display: flex;
  flex-wrap: wrap;
}

h3 {
  font-size: 14px;
}
</style>


