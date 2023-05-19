const http = require('http');

const server = http.createServer((req, res) => {
  const ip = req.connection.remoteAddress;

  console.log(`[${new Date()}] Request from ${ip}`);
  res.setHeader('Content-Type', 'text/plain');
  const date = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
  res.end(`Twój adres IP: ${ip}\nCzas w twojej strefie: ${date}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  const authorName = process.env.AUTHOR_NAME;
  console.log(`[${new Date()}] Server started by ${authorName} on port ${PORT}`);
});

