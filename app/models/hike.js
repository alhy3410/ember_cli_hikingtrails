import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  rating: attr('number'),
  location: attr('string'),
  difficulty: attr('number'),
  body: attr('string'),
  comments: DS.hasMany('comment', {async: true})

});
