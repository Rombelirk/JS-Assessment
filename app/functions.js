if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr)
    },

    speak : function(fn, obj) {
      return fn.apply(obj)
    },

    functionFunction : function(str) {
      return (str2) => `${str}, ${str2}`
    },

    makeClosures : function(arr, fn) {
      return arr.map(el => () => fn(el))
    },

    partial : function(fn, str1, str2) {
      return (str3) => fn(str1,str2,str3)
    },

    useArguments : function() {
      return [...arguments].reduce((acc, curr) => acc + curr)
    },

    callIt : function(fn) {
      const args = [...arguments].slice(1)
      return fn(...args)
    },

    partialUsingArguments : function(fn) {
      const args = [...arguments].slice(1)
      return (...args2) => fn(...args, ...args2)
    },

    curryIt : function(fn) {
      return a => b => c => fn(a,b,c)
    }
  };
});
