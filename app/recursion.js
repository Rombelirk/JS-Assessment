if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      const result = []
      let inSpecifiedSubfolder = false
      const recourse = (data) => {
        if (data.dir && data.dir === dirName) {
          inSpecifiedSubfolder = true
        }
        if (data.files) {
          data.files.forEach(file => {
            if (typeof file === "string" && (!dirName || inSpecifiedSubfolder)) {
              return result.push(file)
            } 
            recourse(file)
            inSpecifiedSubfolder = false
          })
        }
      } 
      recourse(data)
      return result
    },

    permute: function(arr) {
      const perm = arr => {
        let result = []

        for (let i = 0; i < arr.length; i++) {
          let rest = perm(arr.slice(0, i).concat(arr.slice(i + 1)))
      
          if(!rest.length) {
            result.push([arr[i]])
          } else {
            for(let j = 0; j < rest.length; j = j + 1) {
              result.push([arr[i]].concat(rest[j]))
            }
          }
        }
        return result
      }
      return perm(arr)
    }
  };
});
