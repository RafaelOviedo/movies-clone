<template>
    <form class="formContainer">
        <input type="text" placeholder="type your movie here..." />
        <input type="submit" name="submit" />
    </form>
</template>

<script>
export default {
    name: "SearchBar",
};
</script>

<style scoped>
.formContainer {
    position: absolute;
    top: 15%;
    left: 40%;
}
</style>
