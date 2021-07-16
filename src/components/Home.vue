<template>
    <div class="hello">
        <ul>
            <li v-for="(ins, index) in myArr" :key="index">
                Name {{ ins.name }} {{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
    props: {
        myArr: {
            type: Array,
            required: true,
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
