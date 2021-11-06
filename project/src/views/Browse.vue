<template>
  <div>
    <div class="wrapper">
      <h1>Select movies you would like to watch</h1>
    </div>
    <MovieList :movies="movies" />
  </div>
</template>


<script>
import MovieList from "../components/MovieList.vue";
export default {
  name: "Browse",
  components: {
    MovieList,
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$root.$data.movies;
    },
  },
};
</script>