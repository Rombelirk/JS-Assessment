if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /\d/.test(str)
    },

    containsRepeatingLetter : function(str) {
     return (/([a-zA-Z]).*?\1/).test(str)
    },

    endsWithVowel : function(str) {
      const last = str.length - 1
      const result = /^[aieouAIEOU].*/.test(str[last])
      return result
      
    },

    captureThreeNumbers : function(str) {
      const result = str.search(/\d{3}/)
      if (result !== -1) {
        return str.slice(result, result+3) 
      }
      return false
    },

    matchesPattern : function(str) {
      return (/^\d{3}-\d{3}-\d{4}$/).test(str)
    },
    isUSD : function(str) {
      return (/^\$(\d{1,3}){1}(,\d{3})*(\.\d{2})?$/).test(str)
      
    }
  };
});
