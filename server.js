const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();

/* app.use(express.static('dist'));
 */
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

