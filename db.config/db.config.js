const mongoose = require('mongoose')
const uri = 'mongodb+srv://developerrajneeshshukla:fcWFUyFkHt8Zfvxj@portfolio.um2jsvh.mongodb.net/?retryWrites=true&w=majority'
const connectToDb = ()=>{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectToDb  