<template>
    <div>
        <SearchBar />
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
// import store from "../store";

export default {
    name: "Home",
    components: { SearchBar },
    data() {
        return {
            movie: [],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
