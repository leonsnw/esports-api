const express = require('express');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/playerRoutes');
const assistantRoutes = require('./routes/assistantRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', playerRoutes);
app.use('/api', assistantRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
