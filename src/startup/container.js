// Awilix
const { createContainer, asValue, asClass, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// services
const { HomeService } = require("../services");

// controllers
const { HomeController } = require("../controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// Models
const { User, Comment, Idea } = require("../models");

// Repositories
const { UserRepository, IdeaRepository, CommentRepository } = require("../repositories");

// container
const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  })
  .register({
    UserRepository: asClass(User).singleton(),
    IdeaRepository: asClass(Comment).singleton(),
    CommentRepository: asClass(Idea).singleton(),
  });

module.exports = container;
