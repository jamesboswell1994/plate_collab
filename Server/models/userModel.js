const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://jwboswell94:zJsWIt8oZr2Hglrv@clustercodesmithjames.fl8yath.mongodb.net/'

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Dish_reviews'
  })
  .then (() => {console.log('Mongo connect successful')})
  .catch(err => console.log(err))

  const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  });


module.exports = mongoose.model('User' , userSchema)