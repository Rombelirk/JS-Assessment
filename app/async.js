if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise((resolve) => {
        resolve(value)
      })
    },

    manipulateRemoteData : function(url) {
      return fetch(url)
      .then(res => res.json())
      .then((out) => {
          return out.people.map(person => person.name).sort()
      })
      .catch(err => { throw err })
    }
  }
})
