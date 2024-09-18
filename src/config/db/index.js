const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect success!!!');
    } catch (error) {
        console.log('Fail!!');
    }
}

module.exports = { connect };
