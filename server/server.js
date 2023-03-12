const path = require('path');
const express = require('express')

const publicPath = path.join(__dirname, '/chatnosmoke.5.0/public' )
const port = process.env.PORT || 3000
var app = express();

app.use(express.static(publicPath));

app.listen(port, function(){
    console.log(`server is up on port ${port}`)
})
