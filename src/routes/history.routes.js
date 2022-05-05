const controllers = require("../controllers/history.controller");

const routes = [
  {
    method: "GET",
    url: "/history",
    handler: controllers.getHistories,
  },
  {
    method: "GET",
    url: "/history/:id",
    handler: controllers.getHistoryById,
  },
  {
    method: "POST",
    url: "/history",
    handler: controllers.saveHistory,
  },
  {
    method: "PUT",
    url: "/history/:id",
    handler: controllers.updateHistory,
  },
  {
    method: "DELETE",
    url: "/history/:id",
    handler: controllers.deleteHistory,
  },
];

module.exports = routes;
