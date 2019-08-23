const mongoose = require('mongoose');

const schema = mongoose.Schema;

const contentSchema = new schema({
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
    genres: {
        type: String,
        enum: ['Action', 'Adventure', 'Comedy',
               'Crime', 'Drama', 'Fantasy', 'Historical']
    },
    clasaification: {
        type: String,
        enum: ['G', 'TV-Y', 'TV-G',  'PG', 'TV-Y7', 'TV-Y7-FV', 
               'TV-PG', 'PG-13', 'TV-14', 'R', 'NC-17', 'TV-MA']
    },
    medias: [{
        type: schema.Types.ObjectId,
        ref: 'media'
    }],
    /*
    category: [{
        type: schema.Types.ObjectId,
        ref: 'categories'
    }],
    tags: [{
        type: schema.Types.ObjectId,
        ref: 'tags'
    }]
    */
}, {timestamps:true} );


mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
}

module.exports = contentSchema;


/*

Niños pequeños
G, TV-Y, TV-G

Niños
PG, TV-Y7, TV-Y7-FV, TV-PG

Adolescentes
PG-13, TV-14

Adultos
R, NC-17, TV-MA

*/