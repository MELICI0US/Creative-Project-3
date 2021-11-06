<template>
  <div>
    <h1>Search for movies you would like to watch</h1>

    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>
    </div>

    <h1>or select a year</h1>
    <div class="wrap">
      <div v-for="year in years" :key="years.indexOf(year)">
        <button v-on:click="clickedYear(year)">{{ year }}</button>
      </div>
    </div>

    <MovieList :movies="movies" />
  </div>
</template>


<script>
import MovieList from "../components/MovieList.vue";
export default {
  name: "Search",
  components: {
    MovieList,
  },
  data() {
    return {
      searchText: "",
      year: "",
    };
  },
  computed: {
    movies() {
      if (this.year == "") {
        return this.$root.$data.movies.filter(
          (movie) =>
            movie.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0
        );
      } else {
        return this.$root.$data.movies
          .filter(
            (movie) =>
              movie.title.toLowerCase().search(this.searchText.toLowerCase()) >=
              0
          )
          .filter((movie) => movie.year == this.year);
      }
    },
    years() {
      let movies = this.$root.$data.movies;
      let years = [];

      for (let i = 0; i < movies.length; i++) {
        if (!years.includes(movies[i].year)) {
          years.push(movies[i].year);
        }
      }

      return years.sort();
    },
  },
  methods: {
    clickedYear(year) {
      if (this.year == year) {
        this.year = "";
      } else {
        this.year = year;
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

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  width: 100%;
  height: 40px;
}

.wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  margin: 5px;
}
</style>

