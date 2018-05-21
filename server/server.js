const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messagesContoller = require('./controllers/messages_controller');

const PORT = 3005;

app.use(bodyParser.json());
// app.use(express.static('/../public/build'))

const messagesBaseURL = '/api/dogs';
app.post(messagesBaseURL,messagesContoller.create);

app.get('/api/dogs',messagesContoller.read);

app.post(`${messagesBaseURL}/:id`,messagesContoller.update);

app.delete(`${messagesBaseURL}/:id`,messagesContoller.delete);


app.listen( PORT, () => { console.log(`Server listening on port ${PORT}`); })