import Ember from "ember";

var CommentsController = {
  needs: ['hike'],
  actions: {
    save: function() {
      var hike = this.get('controllers.hike.model');
      var newAnswer = this.store.createRecord('comment', {
        author: this.get('author'),
        title: this.get('title'),
        answer: this.get('answer')
      });

      newAnswer.save().then(function(){
        hike.get('comments').pushObject(newAnswer);
        hike.save();
      });

      this.setProperties({
        author: "",
        title: "",
        answer: ""
      });
      this.transitionToRoute('hike', hike.id);
    }
  }
};

export default Ember.Controller.extend(CommentsController);
