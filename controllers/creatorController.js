const creator = require('../models/creator');
const asyncHandler = require('express-async-handler');

// Display list of all creators
exports.creator_list = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: creator LIST');
});

// Display detail page for a specific creator.
exports.creator_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: creator detail: ${req.params.id}`);
  });
  
  // Display creator create form on GET.
  exports.creator_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: creator create GET");
  });
  
  // Handle creator create on POST.
  exports.creator_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: creator create POST");
  });
  
  // Display creator delete form on GET.
  exports.creator_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: creator delete GET");
  });
  
  // Handle creator delete on POST.
  exports.creator_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: creator delete POST");
  });
  
  // Display creator update form on GET.
  exports.creator_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: creator update GET");
  });
  
  // Handle creator update on POST.
  exports.creator_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: creator update POST");
  });
