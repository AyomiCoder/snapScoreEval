const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet'); // Import helmet

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON instead of urlencoded
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Set Content Security Policy (CSP) to allow 'data:' URLs for images
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:"], // Allow 'data:' URLs for images
    },
  })
);

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
