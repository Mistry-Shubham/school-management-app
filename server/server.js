const path = require('path');
const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	const __dirname = path.resolve();

	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running');
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
