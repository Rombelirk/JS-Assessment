if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      return {
        greeting: str1,
        name: str2,
        sayIt() {
          return `${this.greeting}, ${this.name}`
        } 
      }
    }
  };
});

