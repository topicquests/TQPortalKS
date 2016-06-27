/**
 * Created by park on 6/22/2016.
 */

var Constants = require("../apps/constants"),
    Help = require("./helpers/helpers");

exports.plugin = function(app, environment) {
  var CommonModel = environment.getCommonModel(),
      helpers = new Help(environment);

  console.log("Relation ");

  /////////////
  // Menu
  /////////////
  environment.addApplicationToMenu("/relation","Relations");
  /////////////
  // Routes
  /////////////

  /**
   * Initial fetch of the /relation landing page
   */
  app.get("/relation", helpers.isPrivate, function(req, res) {
      var data = environment.getCoreUIData(req);

      res.render("relation" , data);
  });

};
