const router = require('express').Router();
let Todo = require('/todo/schema');

router.route('/').get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const text = req.body.text;
  const newTodo = new Todo({ text });

  newTodo
    .save()
    .then(() => res.json('Todo added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
