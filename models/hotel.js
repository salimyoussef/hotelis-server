const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelRoomSchema = new Schema({
  roomType: String, // single - double - deluxe
  bedType: String, // single - double
  pricePerNight: Number,
  roomOptions: [String]
});

const HotelSchema = new Schema({
  name: String,
  minPrice: Number,
  pictures: [String],
  description: String,
  hotelOptions: [String], // wifi - ...
  rooms: [HotelRoomSchema]
});

module.exports = mongoose.model('hotel', HotelSchema );