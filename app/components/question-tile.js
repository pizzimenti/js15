import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.computed('model.answers.length', function() {
    return this.get('model.answers.length');
  })
});
