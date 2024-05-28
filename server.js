const express = require('express');
const bodyParser = require('body-parser');
const jogadorRoutes = require('./routes/jogadorRoutes');
const assinanteRoutes = require ('./routes/assinanteRoutes')
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', jogadorRoutes);
app.use('/api', assinanteRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
