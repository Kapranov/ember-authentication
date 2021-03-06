import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  authManager: Ember.inject.service(),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      this.get('authManager').authenticate(login, password).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }

});
