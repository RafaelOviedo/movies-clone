<template>
    <div class="landingComponent">
        <div class="landingTitle">
            Welcome to movies app, to continue press the button
        </div>
        <button class="landingButton" @click="goToHomePage">
            Go to home page
        </button>
    </div>
</template>

<script>
export default {
    name: "LandingPage",

    methods: {
        goToHomePage() {
            return this.$router.push({ path: "/home" });
        },
    },
};
</script>

<style scoped>
.landingComponent {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
}

.landingTitle {
    position: absolute;
    top: 30%;
    left: 31%;
    color: white;
    font-size: x-large;
}

.landingButton {
    position: absolute;
    top: 40%;
    left: 43%;
    width: 12%;
    height: 7%;
    background: silver;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: medium;
    cursor: pointer;
}
.landingButton:hover {
    background: white;
}
</style>
