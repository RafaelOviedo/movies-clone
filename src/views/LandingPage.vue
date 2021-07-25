<template>
    <div class="landingComponent">
        <div class="landingTitle">
            Welcome to movies app, to continue press the button
        </div>
        <button class="landingButton">Go to home page</button>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
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
    left: 45%;
    width: 10%;
    height: 5%;
    background: silver;
}
</style>
