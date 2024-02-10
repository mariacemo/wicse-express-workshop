const express = require('express');
const bodyParser = require('body-parser');

const itemsRouter = express.Router();
itemsRouter.use(bodyParser.json());

// Sample data (for demonstration purposes)
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// GET all items
itemsRouter.get('/', (req, res) => {
  res.json(data);
});

// GET item by ID
itemsRouter.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = data.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// POST create a new item
itemsRouter.post('/', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  res.status(201).json(newItem);
});

// PUT update an item by ID
itemsRouter.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  data = data.map((item) => {
    if (item.id === itemId) {
      return { ...item, ...updatedItem, id: itemId }; // Update only the specified fields
    } else {
      return item;
    }
  });

  res.json({ success: true });
});

// DELETE item by ID
itemsRouter.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  data = data.filter((item) => item.id !== itemId);
  res.json({ success: true });
});

module.exports = itemsRouter;
