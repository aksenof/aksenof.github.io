<template>
    <section class="container">
        <div style="flex: 1;">
            <div class="input__wrapper">
                <input type="text" placeholder="Введите задачу" v-model="newTask"/>
            </div>
            <div class="border"></div>
            <button v-on:click="addtask">Добавить</button>
            <div class="task-list">
                <div class="checkboxBlock" v-for="(task,index) in tasks" v-bind:key="task">
                    <input v-bind:id=index type="checkbox" v-model="task.test"/>
                    <label v-bind:for=index>{{task.text}}</label>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "taskList",
        data() {
            return {
                newTask: "",
                tasks: null,
                picked: {
                    task: ""
                }
            };
        },
        methods: {
            addtask() {
                if (this.newTask.trim() == "") return;
                //let task = this.newTask;
                let task = {
                    text: this.newTask
                };
                this.tasks.push(task);
                this.newTask = "";
            }
        },
        created() {
            fetch('https://kodaktor.ru/j/tasklist')
                .then(response => response.json())
                .then(({
                           list
                       }) => {
                    let obj = [];
                    list.forEach(function (element) {
                        obj.push({text: element});
                    });
                    (this.tasks = obj)
                });
        }
    };
</script>

<style>
    .container {
        min-height: 300px;
        display: flex;
    }

    input {
        width: 310px;
        padding: 0.5em;
        margin: 0.5em;
        color: palevioletred;
        background: papayawhip;
        border: none;
        border-radius: 3px;
    }
    .checkboxBlock input {
        width: 0;
        background: #42b983;
    }

    input:focus {
        border: 1px solid black;
    }

    input:checked + label {
        color: #1abc9c;
    }

    input:not(:checked) {
        margin-right: 15px;
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
</style>