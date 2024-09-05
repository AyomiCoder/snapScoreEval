const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON instead of urlencoded
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
