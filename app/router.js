import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("index", {path: '/'});
  this.route("about");
  this.resource("hikes");
  this.resource("hike", { path: 'hikes/:hike_id'}, function(){
    this.resource("comments");
  });
  this.resource("new-hike");
  this.resource("comment", { path: 'comments/:comment_id'});
});

export default Router;
