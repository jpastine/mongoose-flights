import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: Number,
}, {
  timestamps: true
})


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {type: String, 
    enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
  },
  flightNo: {type: Number, min: 10, max: 9999},
  departs: {type: Date,
    default: function() {
      const today = new Date();
      console.log(today);
      const oneYearLater = today.getFullYear() + 1
      console.log(oneYearLater)
      today.setFullYear(oneYearLater)
      return today
    }
  },
  tickets: [ticketSchema]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}