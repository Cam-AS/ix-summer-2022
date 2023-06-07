import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostTable from './components/PostTable';
import { Post } from './models/post';

function App() {
  const [posts, setPosts] = useState([]);

  // Fetch API (built in HTTP methods)

  const url = 'https://jsonplaceholder.typicode.com/';

  async function fetchPosts() {
    try {
      const res = await fetch(url + 'posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      let postData = data.map((post) => {
        return new Post(post.id, post.userId, post.title, post.body);
      });
      setPosts(postData);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchTodos() {
    try {
      const res = await fetch(url + 'todos', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // POSt request, create a resource
  async function createPost() {
    try {
      const res = await fetch(url + 'posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foober',
          body: 'barrish',
          userId: 15,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOurPost() {
    try {
      const res = await fetch('http://localhost:3000/posts', {
        method: 'GET',
        headers: {
          headers: { 'Content-Type': 'application/json' },
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // GET Pokemon
  async function getPokemon() {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: {
          headers: { 'Content-Type': 'application/json' },
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPokemonByName(name) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        method: 'GET',
        headers: {
          headers: { 'Content-Type': 'application/json' },
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="text-center mt-5 px-5">
      <button onClick={fetchPosts} className="btn btn-primary me-1">
        Fetch Posts
      </button>
      <button onClick={fetchTodos} className="btn btn-secondary mx-1">
        Fetch Todos
      </button>
      <button onClick={createPost} className="btn btn-warning mx-1">
        Create Post
      </button>
      <button onClick={getPokemon} className="btn btn-danger ms-1">
        GET Pokemon
      </button>
      <button onClick={getOurPost} className="btn btn-danger ms-1">
        GET Our Post
      </button>
      <button
        onClick={() => getPokemonByName('ditto')}
        className="btn btn-danger ms-1"
      >
        GET Pokemon by Name
      </button>

      <PostTable posts={posts}></PostTable>
    </div>
  );
}

export default App;
