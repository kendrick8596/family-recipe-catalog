const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            minLength: 3,
            maxLength: 100,
            required: true, 
        },
    });

    CategorySchema.virtual('url').get(function () {
        // We do not use an arrow function because we need to use the this object
        return `/catalog/category/${this._id}`;
    });

    //export the model
    module.exports = mongoose.model('Category', CategorySchema);