//importo l' array dei posts
const posts = require('../data/posts.js');

//INDEX
const index = (req, res) => {
  res.json(posts);
}

//SHOW
const show = (req, res) => {
  const id = req.params.id;

  // trovo l elemento interno all array attraverso l id con il metodo find
  const post = posts.find(item => item.id === id);

  res.json(posts)
}

//STORE
const store = (req, res) => {

}

//UPDATE 
const update = (req, res) => {

}

//modify
const modify = (req, res) => {

}

//DESTROY
const destroy = (req, res) => {

}