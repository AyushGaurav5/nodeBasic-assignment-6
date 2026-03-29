const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/home') {
        filePath = 'home.html';
        res.statusCode = 200;
    } 
    else if (req.url === '/about') {
        filePath = 'about.html';
        res.statusCode = 200;
    } 
    else if (req.url === '/contact') {
        filePath = 'contact.html';
        res.statusCode = 200;
    } 
    else {
        filePath = '404.html';
        res.statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            res.writeHead(res.statusCode, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});