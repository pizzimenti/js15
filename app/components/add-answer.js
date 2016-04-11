import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        answer: this.get('answer') ? this.get('answer') : "",
        author: this.get('author') ? this.get('author') : ""
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
