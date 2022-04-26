const mongoose = require('mongoose');
const app = require('./api/index.js');
const config = require('./config');


const boot = async () => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    
    app.listen(config.port, () => {
        console.log(`Server is listening to ${config.port}`);
    });
}

boot();