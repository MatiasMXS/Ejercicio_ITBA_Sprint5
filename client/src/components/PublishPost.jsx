import React from "react"
import { useState } from "react"

function PublishPost() {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [autor, setAutor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el refresh
        postPublicacion(titulo, contenido, autor);
    };

    return <form className="publish-post" onSubmit={handleSubmit}>
        <h1>Crea tu publicación</h1>
        <h3>Ingrese el título de la publicación</h3>
        <input type="text" className="publish-post-title" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <h3>Ingrese el contenido</h3>
        <textarea className="publish-post-content" value={contenido} onChange={(e) => setContenido(e.target.value)}></textarea>
        <h3>Autor del Post</h3>
        <input type="text" className="publish-post-author" value={autor} onChange={(e) => setAutor(e.target.value)} />
        <br />
        <button type="submit" className="publish-post-button">Publicar</button>
    </form>
}

function postPublicacion(titulo, contenido, autor){
    fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            title: titulo, 
            content: contenido, 
            author: autor })
    }).then(response => response.json())
    .then(json => console.log("Post creado con éxito", json))
    .then(() => {alert("Post creado con éxito")
        window.location.reload(false);
    })
    .catch(error => console.error("Error al crear el post", error));
}

export default PublishPost