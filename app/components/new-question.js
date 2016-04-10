import Ember from 'ember';

export default Ember.Component.extend({
  // This causes compile to fail and not having it does NOT break anything. ???
  // addNewQuestion: false;
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        question: this.get('question') ? this.get('question') : "",
        author: this.get('author') ? this.get('author') : ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
