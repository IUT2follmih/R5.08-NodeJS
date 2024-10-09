import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import {MIME_TYPES} from './mime-types.js'

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
    start(pathDir, port = 8080) {
        const server = http.createServer((req, res) => {
            let url = new URL(req.url, `http://${req.headers.host}`)
            let filePath = path.join(pathDir, url.pathname)

            // if (path.extname(filePath) === '') {
            //     filePath = path.join(filePath, '/views/main.html')
            // }
            /*
            // Special handling for HTML files in views directory
            if (path.extname(filePath) === '.html') {
              filePath = path.join(pathDir, 'views', path.basename(filePath));
            } */

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404)
                    res.end(
                        JSON.stringify({
                            error: 'File not found',
                            filePath,
                            url: url.pathname,
                        })
                    )
                    return
                }

                const ext = path.extname(filePath).substring(1)
                const mimeType = MIME_TYPES[ext] || 'text/html'

                res.writeHead(200, {'Content-Type': mimeType})
                res.end(data)
            })
        })

        server.listen(port)
        console.log(`Server is started on port ${port}`)
    }
}

export default Server