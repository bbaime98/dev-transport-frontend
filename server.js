const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use('/api/**',createProxyMiddleware({
    target: 'https://dev-transport.herokuapp.com/',
    changeOrigin: true,
  }));
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});