import './main.html';
import { Todos } from '../imports/api/todos'

import { Template } from 'meteor/templating';


console.log(Todos.find({}).fetch());



Template.main.helpers({
  'todos': function () {
    return Todos.find({}, {sort: {createdAt: -1}});
  }
})

Template.main.events({
  'click .btn-danger': function (event) {
    console.log('clicked', event.target.id);
    if (confirm("Are you sure ?")) {
      Todos.remove(event.target.id);
    }

  },
  'submit #first-form': function (event) {
    event.preventDefault();
    console.log(event.target.noteField.value);
    Todos.insert({
      text: event.target.noteField.value,
      createdAt: new Date(),
      checked: false
    });
    event.target.noteField.value = '';
  },
  'click .checking': function(event) {
    console.log(event.target.checked);
    console.log(event.target.id);
    Todos.update(event.target.id, {$set: {checked: event.target.checked}})
    
  }

})













