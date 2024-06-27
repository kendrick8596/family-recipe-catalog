const ingredient = require("../models/ingredients");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all ingredients.
exports.ingredient_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient list");
});

// Display detail page for a specific ingredient.
exports.ingredient_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: ingredient detail: ${req.params.id}`);
});

// Display ingredient create form on GET.
exports.ingredient_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient create GET");
});

// Handle ingredient create on POST.
exports.ingredient_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient create POST");
});

// Display ingredient delete form on GET.
exports.ingredient_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient delete GET");
});

// Handle ingredient delete on POST.
exports.ingredient_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient delete POST");
});

// Display ingredient update form on GET.
exports.ingredient_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient update GET");
});

// Handle ingredient update on POST.
exports.ingredient_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ingredient update POST");
});
