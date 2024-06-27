const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const IngredientsSchema = new Schema(
    {
        name: {
            type: String,
            minLength: 1,
            maxLength: 100,
            required: true, 
        },
        quantity: {
            type: Number,
            required: true,
            // I can validate this, but I have to account for decimals and fractions
        },
        quantity_type: {
            type: String,
            required: true,
        },
    });

    IngredientsSchema.virtual('url').get(function () {
        // We do not use an arrow function because we need to use the this object
        return `/catalog/ingredients/${this._id}`;
    });

    //export the model
    module.exports = mongoose.model('Ingredients', IngredientsSchema);