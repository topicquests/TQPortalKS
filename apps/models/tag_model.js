/**
 * Created by park on 11/16/2015.
 */
var Constants = require("../constants"),
    TagModel;

TagModel =  module.exports = function(environment) {
  var self = this,
      topicDriver = environment.getTopicDriver();
  console.log("Tag "+topicDriver);

  self.fillDatatable = function(start, count, userId, userIP, sToken, callback) {
      console.log("TagModel.fillDatatable "+userId);
      topicDriver.listInstanceTopics(Constants.TAG_TYPE, start, count, userId,
          userIP, sToken, function bmF(err, rslt) {
        console.log("LISTTags "+err+" | "+JSON.stringify(rslt));
        //TODO
        return callback(err, rslt, 0, 0);
      });
   };

   self.addTags = function(json, userId, userIP, sToken, callback) {
     console.log("TagModel.addTags "+JSON.stringify(json));
     //{"locator":"1eaa8fe2-4f48-4210-be86-f6d99e90ed2b","tag1":"Tag A","tag2":"Tag B","tag3":"","tag4":""}
     var tags = [];
     if (json.tag1 !== "") {
       tags.push(json.tag1);
     }
     if (json.tag2 !== "") {
       tags.push(json.tag2);
     }
     if (json.tag3 !== "") {
       tags.push(json.tag3);
     }
     if (json.tag4 !== "") {
       tags.push(json.tag4);
     }
     topicDriver.findOrProcessTags(json.locator, tags, json.language, userId, userIP, sToken, function tmA(err, rslt) {
       console.log("TagModel.addTags+ "+err+" | "+rslt);
       return callback(err, rslt);
     });
   };
};
