export class Router {
    constructor() {
        this.routes = [];
    }

    addRoute(method, path, handler) {
        this.routes.push({method, path, handler});
    }

    findRoute(req, res) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const route = this.routes.find(route =>
            route.method === req.method && (route.path === url.pathname || route.path === '*')
        );

        if (route) {
            route.handler(req, res);
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({error: "Route not found"}));
        }
    }
}