<template>
    <div class="aboutComponent">
        <h2 class="aboutTitle">About this page</h2>

        <div class="textBox">
            <p class="aboutText">
                This app was created as a clone of my movies app created with
                React-Redux. The main purpose was to achieve the understanding
                of the workflow with Vue-Vuex.
                <br />
                <br />
                In this App you can:
                <br />
                <br />
                -Search movies and list them.
                <br />
                -Being able to see all the details of a particular movie.
                <br />
                -Being able to add the movies to your favorites list.
                <br />
                -Being able to remove movies from your favorites list.
                <br />
                <br />
                We retrieved the data about the movies from OMDB's API, with a
                provided api key.
            </p>

            <h3 class="socialMediaText">My Social Media</h3>

            <a
                href="https://github.com/RafaelOviedo"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    class="githubIcon"
                    src="https://pngimg.com/uploads/github/github_PNG58.png"
                    alt="github icon"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    class="linkedinIcon"
                    src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"
                    alt="linkedin icon"
                />
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutComponent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
}

.aboutTitle {
    position: absolute;
    left: 45%;
    top: 12.5%;
    color: white;
    margin: 0;
}

.textBox {
    position: absolute;
    top: 22%;
    left: 5%;
    width: 90%;
    height: 20%;
}

.aboutText {
    color: white;
    line-height: 150%;
    font-size: larger;
}

.socialMediaText {
    position: absolute;
    top: 50vh;
    left: 73%;
    color: white;
    font-size: large;
}

.githubIcon {
    position: absolute;
    top: 60vh;
    left: 70%;
    width: 6%;
    height: 55%;
    background: white;
    border-radius: 50%;
}
.githubIcon:hover {
    background: lightgray;
}

.linkedinIcon {
    position: absolute;
    top: 60vh;
    left: 80%;
    width: 6%;
    height: 55%;
    background: white;
    border-radius: 50%;
}
.linkedinIcon:hover {
    background: lightgray;
}
</style>
