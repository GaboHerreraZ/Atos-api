const express =  require('express');
const app = express();
const cors = require('cors');
const config =  require('../config');
//const router = require('./routes')

const user =  require('../api/components/user/network');
const post =  require('../api/components/post/network');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


//router(app);

app.use('/api/post', post);
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto', config.api.port);
});