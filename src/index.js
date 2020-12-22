const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(require('./routes/employees'));

app.listen(3000, () => {
    console.log('server on port 3000');
});