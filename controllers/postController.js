// recupero i posts
const posts = require('../data/posts.js');

//definisco le rotte per i post
//INDEX
const index = (req, res) => {
  res.json(posts)
}

//SHOW
const show = (req, res) => {
  res.send(`Dettaglio del post con id ${req.params.id}`)
}

//STORE
const store = (req, res) => {
  res.send(`Creazione di un nuovo post`)
}

//UPDATE
const update = (req, res) => {
  res.send(`Modifica totale del post con id ${req.params.id}`)
}

//MODIFY
const modify = (req, res) => {
  res.send(`Modifica parziale del post con id ${req.params.id}`)
}

//DESTROY
const destroy = (req, res) => {
  res.send(`Cancellazione del post con id ${req.params.id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}