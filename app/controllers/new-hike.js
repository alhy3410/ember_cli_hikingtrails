import Ember from "ember";

var NewHikeController = {
  actions: {
    save: function() {
      var newHike = this.store.createRecord('hike', {
        title: this.get('title'),
        author: this.get('author'),
        rating: this.get('rating'),
        location: this.get('location'),
        difficulty: this.get('difficulty'),
        body: this.get('body')
      });
      newHike.save();
      this.setProperties({
        title: '',
        author: '',
        rating: '',
        location: '',
        difficulty: '',
        body: ''
      });
      this.transitionToRoute('hikes');
    }
  }
};

export default Ember.Controller.extend(NewHikeController);