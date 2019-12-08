if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      class Counter {
        constructor(start, end) {
          this.current = start
          this.end = end 
          this.currentTimeout
          this.count = this.count.bind(this)
        }
        count() {
          console.log(this.current)
          if (this.current === this.end) {
            return
          }
          this.current++
          this.currentTimeout = setTimeout(this.count, 100)
        }
        cancel() {
          clearTimeout(this.currentTimeout)
        }
      }
      const counter = new Counter(start, end)
      counter.count()
      return counter
    }
  };
});