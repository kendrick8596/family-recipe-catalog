const recipe = require("../models/recipe");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all recipes.
exports.recipe_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe list");
});

// Display detail page for a specific recipe.
exports.recipe_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: recipe detail: ${req.params.id}`);
});

// Display recipe create form on GET.
exports.recipe_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe create GET");
});

// Handle recipe create on POST.
exports.recipe_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe create POST");
});

// Display recipe delete form on GET.
exports.recipe_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe delete GET");
});

// Handle recipe delete on POST.
exports.recipe_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe delete POST");
});

// Display recipe update form on GET.
exports.recipe_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe update GET");
});

// Handle recipe update on POST.
exports.recipe_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: recipe update POST");
});
