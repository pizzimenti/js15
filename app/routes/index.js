import Ember from 'ember';

var questions = [{
  id: 1,
  author: "brad",
  question: "Will this message appear?",
  answers: [{
    id: 1,
    qID: 1,
    author: "bill",
    body: "Yes it will!"
  }]
}];


export default Ember.Route.extend({
  model() {
    return questions;
  }
});
