<template>
    <div>
        <nav class="navbar">
            <router-link
                :to="{ name: 'LandingPage' }"
                class="backToLandingBtn navItem"
                >&#10094; Back to Landing Page</router-link
            >
            <div class="logo">LOGO</div>
            <ul class="navItemsBox">
                <router-link :to="{ name: 'Home' }" class="navItem"
                    >Home</router-link
                >
                <router-link :to="{ name: 'FavouriteMovies' }" class="navItem"
                    >Favourite Movies</router-link
                >
                <router-link :to="{ name: 'About' }" class="navItem"
                    >About</router-link
                >
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

.backToLandingBtn {
    position: absolute;
    top: 30%;
    left: 5%;
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

.navItem {
    text-decoration: none;
    color: white;
}
</style>
