const express = require("express");
const router = express.Router();

// Require controller modules.
const recipe_controller = require("../controllers/recipeController");
const creator_controller = require("../controllers/creatorController");
const category_controller = require("../controllers/categoryController");
const ingredient_controller = require("../controllers/ingredientController");

/// RECIPE ROUTES ///

// GET catalog home page.
router.get("/", recipe_controller.index);

// GET request for creating a recipe. NOTE This must come before routes that display recipe (uses id).
router.get("/recipe/create", recipe_controller.recipe_create_get);

// POST request for creating recipe.
router.post("/recipe/create", recipe_controller.recipe_create_post);

// GET request to delete recipe.
router.get("/recipe/:id/delete", recipe_controller.recipe_delete_get);

// POST request to delete recipe.
router.post("/recipe/:id/delete", recipe_controller.recipe_delete_post);

// GET request to update recipe.
router.get("/recipe/:id/update", recipe_controller.recipe_update_get);

// POST request to update recipe.
router.post("/recipe/:id/update", recipe_controller.recipe_update_post);

// GET request for one recipe.
router.get("/recipe/:id", recipe_controller.recipe_detail);

// GET request for list of all recipe items.
router.get("/recipes", recipe_controller.recipe_list);

/// CREATOR ROUTES ///

// GET request for creating creator. NOTE This must come before route for id (i.e. display creator).
router.get("/creator/create", creator_controller.creator_create_get);

// POST request for creating creator.
router.post("/creator/create", creator_controller.creator_create_post);

// GET request to delete creator.
router.get("/creator/:id/delete", creator_controller.creator_delete_get);

// POST request to delete creator.
router.post("/creator/:id/delete", creator_controller.creator_delete_post);

// GET request to update creator.
router.get("/creator/:id/update", creator_controller.creator_update_get);

// POST request to update creator.
router.post("/creator/:id/update", creator_controller.creator_update_post);

// GET request for one creator.
router.get("/creator/:id", creator_controller.creator_detail);

// GET request for list of all creators.
router.get("/creators", creator_controller.creator_list);

/// CATEGORY ROUTES ///

// GET request for creating a category. NOTE This must come before route that displays category (uses id).
router.get("/category/create", category_controller.category_create_get);

//POST request for creating category.
router.post("/category/create", category_controller.category_create_post);

// GET request to delete category.
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to delete category.
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to update category.
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to update category.
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one category.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all category.
router.get("/categories", category_controller.category_list);

/// INGREDIENTS ROUTES ///

// GET request for creating a ingredient. NOTE This must come before route that displays ingredient (uses id).
router.get(
  "/ingredient/create",
  ingredient_controller.ingredient_create_get,
);

// POST request for creating ingredient.
router.post(
  "/ingredient/create",
  ingredient_controller.ingredient_create_post,
);

// GET request to delete ingredient.
router.get(
  "/ingredient/:id/delete",
  ingredient_controller.ingredient_delete_get,
);

// POST request to delete ingredient.
router.post(
  "/ingredient/:id/delete",
  ingredient_controller.ingredient_delete_post,
);

// GET request to update ingredient.
router.get(
  "/ingredient/:id/update",
  ingredient_controller.ingredient_update_get,
);

// POST request to update ingredient.
router.post(
  "/ingredient/:id/update",
  ingredient_controller.ingredient_update_post,
);

// GET request for one ingredient.
router.get("/ingredient/:id", ingredient_controller.ingredient_detail);

// GET request for list of all ingredient.
router.get("/ingredients", ingredient_controller.ingredient_list);

module.exports = router;
