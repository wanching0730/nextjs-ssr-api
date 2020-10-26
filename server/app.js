const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const routes = require('../routes');
const getRoute = require("./api/get");

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare()
    .then(async () => {

        //declare Express Engine
        const server = express();
        server.use(bodyParser.json());

        // backend routes
        server.use(getRoute);

        // frontend routes
        server.use(handler)
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on port 3000')
        })
    })