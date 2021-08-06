const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");

const {
  cacheInit,
} = require("../middlewares/chache-expeditious.middleware");

const { CACHE_TIME } = require('../helpers');

module.exports = function ({ UserController }) {
  const router = Router();

  router.get(
    "",
    [ParseIntMiddleware, cacheInit],
    UserController.getAll
  );
  router.get("/:userId", cacheInit, UserController.get);
  router.patch("/:userId", AuthMiddleware, UserController.update);
  router.delete("/:userId", AuthMiddleware, UserController.delete);

  return router;
};
