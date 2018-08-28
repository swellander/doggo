const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { join } = require('path');

app.use('/api/doggos', require('./router'));
app.use(express.static('dist'))
app.use(express.static('public'))

// app.get('/', (req, res, next) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })



app.listen(port, () => console.log(`Now listening on port: ${port}`))
