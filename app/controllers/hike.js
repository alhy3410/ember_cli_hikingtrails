import Ember from "ember";

var HikeController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
};

export default Ember.Controller.extend(HikeController);
