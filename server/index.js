const server = require('./app.js');

server.listen(8080, () => {
    console.log('Server is listening on http://localhost:8080');
});