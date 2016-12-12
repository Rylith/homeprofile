import { Template } from 'meteor/templating';
 
import './body.html';

import { Lights } from '../api/lights.js';
 
Template.body.helpers({
	lights() {
		return Lights.find({});
	}
});