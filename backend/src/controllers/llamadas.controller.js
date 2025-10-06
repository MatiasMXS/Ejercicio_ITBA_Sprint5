// Simulación de base de datos en memoria
let posts = [
  {
    id: 1,
    title: "Primer post",
    content: "Contenido de ejemplo",
    author: "Matías",
    createdAt: new Date(),
    comments: []
  },
  {
    id: 2,
    title: "Segundo post",
    content: "Otro contenido",
    author: "Lucía",
    createdAt: new Date(),
    comments: []
  }
];

// GET → Obtener todos los posts
const getAllPosts = (req, res) => {
  res.json(posts);
};

// POST → Crear un nuevo post
const createPost = (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
    createdAt: new Date(),
    comments: []
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};


// POST → Crear un comentario en un post existente
const createComment = (req, res) => {
  const postId = parseInt(req.params.id);
  const { author, content } = req.body;

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "Post no encontrado" });
  }

  if (!author || !content) {
    return res.status(400).json({ message: "Faltan datos del comentario" });
  }

  const newComment = {
    id: post.comments.length + 1,
    author,
    content,
    createdAt: new Date()
  };

  post.comments.push(newComment);
  res.status(201).json(newComment);
};

// 👇 Exportar con los mismos nombres que usás en las rutas
module.exports = { getAllPosts, createPost, createComment };
