const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 100,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Creator',
            required: true,
        },
        directions: {
            type: String,
            required: true,
        },
    });

    // Virtual for recipe URL.
    RecipeSchema.virtual('url').get(function () {
        // No arrow function because we need .this object
        return `/catalog/recipe/${this._id}`;
    });

    // Export Model
    module.exports = mongoose.model('Recipe', RecipeSchema);