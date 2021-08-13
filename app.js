const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: 'src' });
const handle = app.getRequestHandler();

app.prepare().then( () => {
  const server = express();

  server.use( express.json() );

  // add custom path here
  // server.post('/request/custom', custom);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("Ready on http://localhost:3000");
  });
});