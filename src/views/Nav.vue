<template>
    <div>
        <ul>
            <router-link :to="{ name: 'LandingPage' }"
                >Landing Page</router-link
            >
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </ul>

        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
