import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion() {
      var params = {
        question: this.get('question') ? this.get('question') : "",
        author: this.get('author') ? this.get('author') : ""
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', params);
    }
  }
});
