const fetch = (...args) => import ('node-fetch').then(({default: fetch}) => fetch(...args));

const {json} = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
