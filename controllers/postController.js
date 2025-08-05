// recupero i posts
const posts = require('../data/posts.js');

//definisco le rotte per i post
//INDEX
const index = (req, res) => {
  res.json(posts)
}

//SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.body);
  //recupero il post con l'id
  const post = posts.find(item => item.id === id);

  res.json(post);
}

//STORE
const store = (req, res) => {
  res.send(`Creazione di un nuovo post`)
}

//UPDATE
const update = (req, res) => {
  const id = req.params.id;

  res.send(`Modifica totale del post con id ${id}`)
}

//MODIFY
const modify = (req, res) => {
  const id = req.params.id;

  const post = posts.find(item => item.id === id)
  res.send(`Modifica parziale del post con id ${id}`)
}

//DESTROY
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id)

  //Cancellare il post dall array
  posts.splice(posts.indexOf(post), 1);
  //restituisco lo status 204
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}