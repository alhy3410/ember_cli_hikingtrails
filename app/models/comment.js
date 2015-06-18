import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: attr('string'),
  title: attr('string'),
  answer: attr('string'),
  hike: DS.belongsTo('hike', {async: true})
});
