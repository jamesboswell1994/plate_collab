

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

  const dishReviewSchema = new Schema({
    dishName : String,
    restaurant : String,
    restaurant_id : {
        type : Schema.Types.ObjectId,
        ref : 'restaurant'
    },
    grade: {
        type: String,
        enum: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
    },
    notes : String,
    category : String,
    userId : String,
    updatedAt : new Date()
  })

  const DishReview = mongoose.model('dishReview' , dishReviewSchema)

  const RestaurantSchema = new Schema({
    name : String,
    location : String,
    stars : Number
  })

  const Restaurant = mongoose.model('restaurant' , RestaurantSchema)

  module.exports = {
    DishReview,
    Restaurant
  }