const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

// app.use(express.static('/Users/gusfeliciano345/Desktop/Hack Reactor/bootcamp/movieListV2/public'));

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];


app.get('/movies', (req, res) => {
  res.send(movies);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});