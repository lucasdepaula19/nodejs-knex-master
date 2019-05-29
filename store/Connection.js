const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://lucas_paula:9JXwmsPHFVcLhBvU@project1-lwfm7.mongodb.net/test?retryWrites=true'

const openConnection = () => mongoose.connect(connectionString)

module.exports = {
    openConnection,
}