// Simulación de datos (podés reemplazar esto luego con base de datos)
let posts = [
  { id: 1, title: "Primer post", content: "Contenido de ejemplo", author: "Matías" },
  { id: 2, title: "Segundo post", content: "Otro contenido", author: "Lucía" }
];

// GET → Obtener todos los posts
const getAllPosts = (req, res) => {
  res.json(posts);
};

// POST → Crear un nuevo post
const getPost = (req, res) => {
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
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};

// POST → Obtener un post por ID (aunque por convención sería GET)
const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post no encontrado" });
  }

  res.json(post);
};

// 👇 Exportar con los mismos nombres que usás en las rutas
module.exports = { getAllPosts, getPost, getPostById };
