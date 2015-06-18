import Ember from "ember";

var HikeSortController = {
  sortProperties: ['title:asc'],
  sortedHikes: Ember.computed.sort('model', 'sortProperties'),
  actions: {
    sortRating: function() {
      this.set('sortProperties', ['rating:desc']);
    },
    sortLocation: function() {
      this.set('sortProperties', ['location:desc']);
    },
    sortDifficulty: function() {
      this.set('sortProperties', ['difficulty:desc']);
    },
    sortTitle: function() {
      this.set('sortProperties', ['title:asc']);
    }
  }
};

export default Ember.Controller.extend(HikeSortController);
