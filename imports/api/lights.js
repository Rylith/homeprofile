import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
 
export const Lights = new Mongo.Collection('lights');

Meteor.methods({
	  'lights.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Lights.insert({
      text,
      createdAt: new Date(),
      working:false,
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'lights.remove'(lightId) {
    check(lightId, String);
 
    Lights.remove(lightId);
  },
  'lights.setChecked'(lightId, running) {
    check(lightId, String);
    check(running, Boolean);
 
    Lights.update(lightId, { $set: { working: running } });
  },
  'click':function(){
  	console.log("You clicked!");
  },
});