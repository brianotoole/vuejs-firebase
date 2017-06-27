<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue.js &amp; Firebase app</h1>
    </div><!--/.page-header-->

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Add item</h3>
      </div><!--/.panel-heading-->
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" value="" v-model="newBook.title">
          </div><!--/.form-group-->
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" value="" v-model="newBook.author">
          </div><!--/.form-group-->
          <div class="form-group">
            <label for="bookAuthor">URL:</label>
            <input type="text" id="bookUrl" class="form-control" value="" v-model="newBook.url">
          </div><!--/.form-group-->
          <input type="submit" class="btn btn-primary" value="Add Item">
        </form><!--/#form-->
      </div><!--/.panel-body-->
    </div><!--/.panel-->

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Lists</h3>
      </div><!--/.panel-heading-->
      <div class="panel-body">
        <div class="row" v-for="book in books">
          <div class="col-sm-4">
            <h5>Title</h5>
            <li>{{book.title}}</li>
          </div><!--/.col-->
          <div class="col-sm-4">
            <h5>Author</h5>
            <li>{{book.author}}</li>
          </div><!--/.col-->
          <div class="col-sm-4">
            <h5>Url</h5>
            <li><a v-bind:href="book.url">{{book.url}}</a></li>
          </div><!--/.col-->
        </div><!--/.row-->
      </div><!--/.panel-body-->
    </div><!--/.panel-->

  </div><!--/#app-->
</template>




<script>
//import Hello from './components/Hello'
import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBeREG-CJqyP4tdKsIHWqc3OloF525ShGA",
  authDomain: "vuejs-aab87.firebaseapp.com",
  databaseURL: "https://vuejs-aab87.firebaseio.com",
  projectId: "vuejs-aab87",
  storageBucket: "vuejs-aab87.appspot.com",
  messagingSenderId: "734312890034"
}

let app = Firebase.initializeApp(config);
let db = app.database();
let bookRef = db.ref('books'); // data stored inside "books" node inside firebase

export default {
  name: 'app',
  firebase: {
    books: bookRef
  },
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        url: ''
      }
    }
  },
  methods: {
    addBook: function() {
      bookRef.push(this.newBook);//send form data as object
      // reset form after submit
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = '';
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
