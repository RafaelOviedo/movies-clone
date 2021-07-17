<template>
    <div>
        <nav class="navbar">
            <div class="logo">LOGO</div>
            <ul class="navItemsBox">
                <router-link :to="{ name: 'LandingPage' }"
                    >Landing Page</router-link
                >
                <router-link :to="{ name: 'Home' }">Home</router-link>
                <router-link :to="{ name: 'About' }">About</router-link>
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: black;
}

.logo {
    position: absolute;
    top: 35%;
    left: 20%;
}

.navItemsBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transform: translate(190%, -21%);
    width: 30%;
    height: 100%;
}
</style>
