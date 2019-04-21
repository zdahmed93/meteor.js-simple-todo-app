import '../imports/api/todos';
import {Todos} from '../imports/api/todos'

Todos.insert({
  text: 'todo 3',
  createdAt: new Date()
})

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

});
