const express = require('express');
const app = express();
const Anecdote = require('./models/anecdotes');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

app.use(express.static('build'));
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Home Page!');
});

app.get('/anecdotes', async (_req, res) => {
  res.json(await Anecdote.find({}));
});

app.post('/anecdotes', async (req, res) => {
  try {
    const anecdote = new Anecdote(req.body);
    res.json(await anecdote.save());
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.put('/anecdotes/:id', async (req, res) => {
  try {
    await Anecdote.findByIdAndUpdate(req.params.id, req.body);
    res.json(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port: ${PORT}`);
});
