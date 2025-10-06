import React from "react"
import { useState } from "react"

function ViewPosts() {
    const [posts, setPosts] = useState([]);
    
    fetch("http://localhost:4000/api/posts", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error("Error al obtener los posts", error));

    return (<div>
        <h2>Lista de Publicaciones</h2>
        <ul>
            {posts.map((post, idx) => (
                <li key={idx}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <small>{post.author}</small>
                </li>
            ))}
        </ul>
    </div>);
}

export default ViewPosts;