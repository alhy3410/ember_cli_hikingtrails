import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("index", {path: '/'});
  this.route("about");
  this.resource("hikes", function() {
    this.resource("hike", { path: ':hike_id'});
  });
  this.resource("new-hike");
});

export default Router;
