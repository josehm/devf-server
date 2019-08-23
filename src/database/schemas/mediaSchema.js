const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mediaSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    mediaAddress: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        default: 0,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    contentID: {
        type: schema.Types.ObjectId,
        required: true,
    }
}, {timestamps:true} );

mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
}

module.exports = mediaSchema;