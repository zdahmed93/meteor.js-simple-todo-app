import { Tasks } from '../imports/api/tasks'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';


// const data = [
//   { text: "Task 1"},
//   {text: "Task 2"},
//   {text: "Task 3"}
// ] 


Template.tasks.helpers({
  tasks() {
    return Tasks.find({});
  }
})






