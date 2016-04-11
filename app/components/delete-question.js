import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm('Are you sure you wish to DELETE this question?')) {
        this.sendAction('destroyQuestion',question);
      }
    }
  }
});
