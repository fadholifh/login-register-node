const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
//ejs


//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT =  process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port http://localhost:${PORT}`));