<template>
    <div class="pt-5">
        <router-link to="/create" class="btn btn-success">New Snippet</router-link>
        <div v-if="snippets && snippets.length">
            <table class="table table-bordered"">
                <tr>
                    <th>Title</th>
                    <th>Description</th> 
                    <th>Language</th>
                </tr>
                <tr v-for="snippet in snippets">
                    <td><router-link :to="{name: 'edit', params: { id: snippet.id }}">{{ snippet.title }}</router-link></td>
                    <td>{{ snippet.description }}</td>
                    <td>{{ snippet.language }}</td>
                </tr>
            </table>        
        </div>
    </div>
</template>


<script>

import axios from 'axios';

export default {
    data() {
        return {
            snippets: []
        }
    },
    created() {
        this.all();
    },
    methods: {
        all: function () {
            axios.get('http://127.0.0.1:8000/api/snippets/')
                .then( response => {
                    this.snippets = response.data
                });
        }
    },
}
</script>

<style>
.btn {
    margin-bottom: 10px;
}
</style>