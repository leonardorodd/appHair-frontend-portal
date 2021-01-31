const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.use(express.static('build'));

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

