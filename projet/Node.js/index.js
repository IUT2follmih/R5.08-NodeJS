const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Charger le fichier OpenAPI
const swaggerDocument = YAML.load(path.join(__dirname, 'api/openapi.yaml'));

// Middleware essentiels
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Route pour Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Importer les routes
const trackRoutes = require('./routes/routeTracks');
const albumRoutes = require('./routes/routeAlbums');
const artistRoutes = require('./routes/routeArtists');
const producerRoutes = require('./routes/routeProducers');

// Définir le préfixe pour toutes les routes de l'API
app.use('/', trackRoutes);
app.use('/', albumRoutes);
app.use('/', artistRoutes);
app.use('/', producerRoutes);

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Swagger UI is available on http://localhost:${port}/docs`);
});
