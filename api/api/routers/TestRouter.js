var test = require("../controllers/TestController");
module.exports = function (app) {
    app.route("/test").get(test.getData)
}