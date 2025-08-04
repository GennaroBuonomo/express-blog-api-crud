//IMPORTO EXPRESS
const express = require('express');

//CHIAMO LA FUNZIONE EXPRESS E NE RESTITUISCO IL VALORE IN UNA VARIABILE APP
const app = express();

//DEFINISCO LA PORTA 3000
const port = 3000;

//IMPORTO IL FILE ROUTER PER I POST
const postsRouter = require('./routers/postRouter');

//INSERIMENTO DEL MIDDLEWARE PER I FILE STATICI
app.use(express.static('public'));

//DEFINISCO LE ROTTE DEI POST
app.use('/posts', postsRouter);

//DEFINISCO LA ROTTA BASE
app.get('/', (req, res) => {
  res.send("Benvenuti nei post");
})

//DICHIARO ALLA NOSTRA APPLICAZIONE DI RESTARE IN ASCOLTO SULLA PORTA DEFINITA IN ALTO
app.listen(port, () => {
  console.log(`Server dei miei post sulla porta ${port}`);
})