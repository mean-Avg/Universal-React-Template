var express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hellloooo');
});

app.listen(port, () => {
	console.log(`app running at ${port}`);
});
