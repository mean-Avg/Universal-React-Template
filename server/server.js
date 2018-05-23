const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`app running at ${port}`);
});
