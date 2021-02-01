const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

module.exports = () => {
    const app = express();

    app.use(bodyParser.json())

    consign()
    .include('Controllers')
    .into(app)
    
    return app;
}