const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CreatorSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            maxLength: 100,
        },
        last_name: {
            type: String,
            required: true,
            maxLength: 100,
        },
    });

// Virtual for creators full name
CreatorSchema.virtual('name').get(function () {
    // Handle when there is either not first or last name > return empty string for that case
    let fullname = '';
    if (this.first_name && this.last_name) {
        fullname = `${this.last_name}, ${this.first_name}`;
    }
    return fullname;
});

// Virtual for creator's URL
CreatorSchema.virtual('url').get(function () {
    // No arrow function because we need the this object
    return `'catalog/creator/${this._id}`;
});

// Export the model
module.exports = mongoose.model('Creator', CreatorSchema);