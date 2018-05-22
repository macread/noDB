const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dogsController = require('./controllers/dogs_controller');

const PORT = 3005;

app.use(bodyParser.json());
// app.use(express.static('/../public/build'))

const messagesBaseURL = '/api/dogs';
app.post(messagesBaseURL,dogsController.create);

app.get(`${messagesBaseURL}/filter`,dogsController.filter);

app.get(messagesBaseURL,dogsController.read);

app.post(`${messagesBaseURL}/:id`,dogsController.update);

app.delete(`${messagesBaseURL}/:id`,dogsController.delete);


app.listen( PORT, () => { console.log(`Server listening on port ${PORT}`); })