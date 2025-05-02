require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => res.send('Server is running!'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

console.log('POSTGRES_PORT:', process.env.POSTGRES_PORT);