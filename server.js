const express = require('express');
const app = express();

var data = require('./data')

app.use(express.static('public'));

var port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});
});

app.get('/students', (req, res) => {
  res.json(data);
}); 

app.get("/students/:id", (req, res) => {
  const itemId = req.params.id;
  const item = data.find(_item => _item.id === itemId);

  if (item) {
     res.json(item);
  } else {
     res.json({ message: `item ${itemId} doesn't exist`})
  }
  
});

app.get('/login', (req, res) => {
  res.sendFile('login.html' , { root : __dirname});
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`App listening on port ${port}`),
);