<template>
    <div class="container">
        <button @click="inc() + upd()">+1</button>
        <input type="text" :placeholder='[[ counter ]]' v-model.number="counter" v-on:keyup="upd" @change="upd"/>
        <div v-for="(value) in list" v-bind:key="value">
            <h3>
                <span>{{2}}</span>
                <sup>{{ value }}</sup>= {{2 ** value}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: Math.floor(Math.PI),
                list: [0, 1, 2]
            };
        },
        methods: {
            inc() {
                this.counter++;
            },
            upd() {
                const id = this.counter + 1;
                // const index = this.list.length;
                this.list = Array.apply(null, {
                    length: id
                }).map(Number.call, Number);
                console.log(this.list);
            }
        }
    };
</script>

<style>
    .container {
        min-height: 300px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .container div {
        margin: 2px;
        border: 1px solid #00c3ff;
        border-radius: 5px;
        box-shadow: 0 0 5px 4px lightgoldenrodyellow;
        padding: 0 10px;
    }


    input {
        width: 500px;
        padding: 0.5em;
        margin: 0.5em;
        color: palevioletred;
        background: papayawhip;
        border: none;
        border-radius: 3px;
    }

    input:focus {
        border: 1px solid black;
    }

    button {
        background: white;
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    }

    button:hover {
        cursor: pointer;
        border: 2px solid brown;
    }

    button:active {
        background: antiquewhite;
    }
</style>