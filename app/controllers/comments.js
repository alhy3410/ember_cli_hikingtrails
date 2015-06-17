import Ember from "ember";

var CommentsController = {
  needs: ['hike'],
  actions: {
    save: function() {
      var newAnswer = this.store.createRecord('comment', {
        author: this.get('author'),
        title: this.get('title'),
        answer: this.get('answer')
      });
      newAnswer.save();

      var hike = this.get('controllers.hike.model');
      hike.get('comments').pushObject(newAnswer);
      hike.save();

      this.transitionToRoute('hike', hike.id);
    }
  }
};

export default Ember.Controller.extend(CommentsController);
