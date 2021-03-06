const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Card = new Schema(
    {
        // this ID is generated by mongoDB
        // image_id: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("cards", Card);
