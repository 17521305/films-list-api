const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRouter = require('./routes/posts');
app.use('/posts',postsRouter);

app.get('/',(req,res)=>{
    res.send('We are at home');
})
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>console.log('Connected to DB!')
)
app.listen(process.env.PORT || 8000, function () {
    console.log('Listening on port 8000')
});