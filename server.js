const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = [
  { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
  { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
  { id: 3, author: 'Adam Snow', text: 'Successful cooperation!' },
  { id: 4, author: 'Danny Nitro', text: 'It promise great cooperation.' },
  { id: 5, author: 'Angelina Nobel', text: 'Make money!' },
  { id: 6, author: 'Anna Maj', text: 'Good job.' },
];

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});