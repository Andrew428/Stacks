const express = require('express');
const serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(__dirname, { 'index': ['index.html'] }));
app.listen(3000, () => {
    console.log('🚀  Server running on 3000...');
});