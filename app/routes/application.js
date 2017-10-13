import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    error: function() {
      this.transitionTo('/login');
      return false;
    }
  }

});
