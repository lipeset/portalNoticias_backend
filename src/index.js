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
require('./controller/pilotClassificationController')(app);
require('./controller/teamClassificationController')(app);
require('./controller/picsController')(app);
require('./controller/videosController')(app);
require('./controller/lastRaceController')(app);

app.listen(process.env.PORT || 3001);