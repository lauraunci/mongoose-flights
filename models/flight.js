const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
{
    airport_a: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrivals: {
        type: Date
    }
},
{
    timestamps: true
}
);

const flightSchema = new Schema(
    {
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United']
        },
        flightNo: {
            type: Number,
            required: true,
            min: 10,
            max: 9999
        }, 
        departs: {
            type: Date,
            default: function() {
                let nextYear = new Date();
                return  nextYear.setFullYear(nextYear.getFullYear() + 1);
            }
        },
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SEA'],
            default: 'SEA',
        },
       
        destinations: [destinationSchema]
    },
    {
        timestamps: true
    }
    );

module.exports = mongoose.model('Flight', flightSchema);