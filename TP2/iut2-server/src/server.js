import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import {MIME_TYPES} from './mime-types.js'
import {Router} from './router.js'

/**
 * Create an HTTP server listening to a specific port.
 * @class
 */
export class Server {
    /**
     * Start the server from a specific entry point and on a specific user port.
     * @param {string} pathDir - the entry point of the files the server is supposed to deliver.
     * @param {number} port - a port number (between 102449151).
     */
    constructor() {
        this.router = new Router();
    }

    start(pathDir, port = 8080) {
        this.router.addRoute('GET', '/', (req, res) => {
            this.serveFile(path.join(pathDir, '/views/main.html'), res);
        });
        this.router.addRoute('GET', '/boutique', (req, res) => {
            this.serveFile(path.join(pathDir, '/views/boutique.html'), res);
        });
        this.router.addRoute('GET', '/boutique/rayon', (req, res) => {
            this.serveFile(path.join(pathDir, '/views/rayon.html'), res);
        });
        this.router.addRoute('GET', '/login', (req, res) => {
            this.serveFile(path.join(pathDir, '/views/connexion.html'), res);
        });

        this.router.addRoute('GET', '*', (req, res) => {
            const url = new URL(req.url, `http://${req.headers.host}`);
            const filePath = path.join(pathDir, url.pathname);
            this.serveFile(filePath, res);
        });

        const server = http.createServer((req, res) => {
            const url = new URL(req.url, `http://${req.headers.host}`);
            console.log(`Received request for: ${url.pathname}`);

            this.router.findRoute(req, res);
        });

        server.listen(port, () => {
            console.log(`[${new Date().toISOString()}] Server started on port ${port}`);
            console.log(``);
        });

        server.on('error', (error) => {
            console.error(`[${new Date().toISOString()}] Server error:`, error);
            console.log(``);
        });
    }

    serveFile(filePath, res) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify({error: "File not found", filePath}));
                console.error(`[${new Date().toISOString()}] 404 Not Found: ${filePath}`);
                console.log(``);
                return;
            }

            const ext = path.extname(filePath).substring(1);
            const mimeType = MIME_TYPES[ext] || 'text/html';
            res.writeHead(200, {'Content-Type': mimeType});
            res.end(data);

            console.log(`[${new Date().toISOString()}] 200 OK: ${filePath}`);
            console.log(``);
        });
    }
}

export default Server;