import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	snippets: [],
  	snippet: ''
  },
  mutations: {
    SET_SNIPPETS(state, snippets) {
    	state.snippets = snippets
    },
    SET_SNIPPET(state, snippet) {
    	state.snippet = snippet
    }
  },
  actions: {
    getAllSnippets(context) {
    	axios.get('http://127.0.0.1:8000/api/snippets/').then( response => {
    		context.commit('SET_SNIPPETS', response.data)
        });
    },
    getSnippet(context, snippet_id) {
    	axios.get('http://127.0.0.1:8000/api/snippets/' + snippet_id).then( response => {
    		context.commit('SET_SNIPPET', response.data)
    	})
    },
    createSnippet(context, snippet) {
    	axios.post("http://127.0.0.1:8000/api/snippets/", snippet)
        .then(response => {
            console.log(response);
        });
    },
    updateSnippet(context, snippet) {
    	axios.put(`http://127.0.0.1:8000/api/snippets/${snippet.id}/`, snippet)
          .then(response => {
            console.log(response)
          });
    }
  },
  getters: {
  	snippets: state => state.snippets,
  	snippet: state => state.snippet
  }
});
