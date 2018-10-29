const express = require('express');
const bodyParser = require('body-parser');
const fc = require('./controllers/favorites_controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/favorites',fc.read)
app.post('/api/favorites',fc.create)
app.put('/api/favorites/:id',fc.update)
app.delete('/api/favorites/:id',fc.delete)

const port = 3420;

app.listen(port,() => {
    console.log('listening on port:', port);
})