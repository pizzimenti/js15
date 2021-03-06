import Ember from 'ember';

export default Ember.Component.extend({
  answerCollection: Ember.inject.service(),


  actions: {
    saveAnswer(answer) {
      this.get('answerCollection').add(answer);
    }
  }
});
