var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    GamePlaceRoutes = require('../src/routes/game-place.routes');

app.use('/api', GamePlaceRoutes);

app.listen(port, () => {
    console.log('FLA games RESTful API server started on: ' + port);
});
