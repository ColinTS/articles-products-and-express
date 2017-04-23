const app = require('./server.js');
const server = app.listen(3000, () => {
  console.log('server listening on port 3000');
});