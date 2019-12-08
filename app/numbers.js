if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      const b = num.toString(2)
      return Number(b[b.length - bit])
    },

    base10: function(str) {
      return parseInt(str, 2)
    },

    convertToBinary: function(num) {
      let result = num.toString(2)
      while (result.length < 8) result = "0" + result
      return result
    },

    multiply: function(a, b) {
      return (a * 10) * (b * 10) / 100
    }
  };
});

