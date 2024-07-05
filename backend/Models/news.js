const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title : {
        type : String,
    },

    writedBy : {
        type : mongoose.mongoose.Schema.Types.ObjectId,
        ref : "users",
    },

    description : {
        type : String,
    },

    image : {
        type : String,
    },

    timestamp : {
        type : Date,
        default : Date.now()
    },
});

const NewsModel = mongoose.model("news", NewsSchema);

module.exports = NewsModel;