const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const productRoutes = require('./routes/product');

app.use(cors());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
