
const express = require('express');
const itemsRouter = require('./itemsRouter');

const app = express();
const port = 3000;

// Use the /items router
app.use('/items', itemsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
