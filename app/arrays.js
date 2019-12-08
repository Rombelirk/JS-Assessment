if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item)
    },

    sum : function(arr) {
      return arr.reduce((acc, curr) => {
        return acc+curr
      })
    },

    remove : function(arr, item) {
      return arr.filter(element => {
        return element !== item
      })
    },

    removeWithoutCopy : function(arr, item) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1)
          i--
        }
      }
      return arr
    },

    append : function(arr, item) {
      return [...arr, item]
    },

    truncate : function(arr) {
      arr.pop()
      return arr
    },

    prepend : function(arr, item) {
      return [item, ...arr]
    },

    curtail : function(arr) {
      arr.shift()
      return arr
    },

    concat : function(arr1, arr2) {
      return [...arr1, ...arr2]
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item )
      return arr
    },

    count : function(arr, item) {
      return arr.reduce((acc,curr) => {
        if (curr === item) {
          return acc + 1
        }
        return acc
      }, 0)
    },

    duplicates : function(arr) {
      const entries = []
      const result = []
      arr.forEach(el => {
        if (!entries.includes(el)) {
          entries.push(el)
        } else {
          if (!result.includes(el)) result.push(el)
        }
      })
      return result
    },

    square : function(arr) {
      return arr.map(el => el * el)
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce((acc, curr, index) => {
        if (curr === target) {
          return [...acc, index]
        }
        return acc
      }, [])
    }
  }
})
