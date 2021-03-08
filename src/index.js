const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controller/pilotController')(app);
require('./controller/teamController')(app);
require('./controller/newsController')(app);

app.listen(3001);