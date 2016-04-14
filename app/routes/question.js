import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  answerCount: Ember.computed('model.answers.length', function() {
    return this.get('model.answers').get('length');
  }),
  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      })
      rental.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      console.log("paramsQuestion:",params.question)
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      // this.transitionTo('index');
    }
  }
});
