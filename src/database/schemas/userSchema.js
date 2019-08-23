const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Hombre', 'Mujer']
    },
    post: [{
        type: schema.Types.ObjectId,
        ref: 'posts'
    }]
}, {timestamps:true} );


mongoose.Types.ObjectId.prototype.valueOf = function() {
    return this.toString();
}

module.exports = userSchema;





/*
Schemas:

Costumers:
    -user          -> Datos del cliente
    -contentUser   -> Contenido visto por le cliente
    -contentStatus -> Medir el tiempo y capitulo en el que se quedo !!evaluar

Admins:
    -content      -> Peliculas, series, etc.
    -media        -> videos
    -contentMedia -> Relación videos que pertenecen a peliculas, series, etc.
    -categories   -> Para organizar el contenido
    -tags         -> Para organizar contenido

contentUser
    -userId
        -contentId: con
        -chapterId: mediaId
        -timeWatching: String
        -finish: bool
*/