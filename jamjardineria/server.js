import fs from 'fs';   
import http from 'http';
import https from 'https';
import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('¡Conexión segura y válida para internet!');
});

// 1. Cargar los certificados de Let's Encrypt
// Reemplaza "tudominio.com" por tu dominio real
const privateKey = fs.readFileSync('/etc/letsencrypt/live/jamjardineria.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/jamjardineria.com/fullchain.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// 2. Crear el servidor HTTP (Puerto 80) para redirigir a HTTPS
const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
});

// 3. Crear el servidor HTTPS (Puerto 443) con tu aplicación
const httpsServer = https.createServer(credentials, app);

// 4. Iniciar ambos servidores
httpServer.listen(80, () => {
    console.log('Servidor HTTP (80) redirigiendo a HTTPS...');
});

httpsServer.listen(443, () => {
    console.log('Servidor HTTPS (443) activo y seguro.');
});