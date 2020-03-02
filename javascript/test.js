const pend = 0;
const ful = 1;
const rej = 2;
function promise(fn) {
  var state = pend;
  var value = null;
  var handlers = [];
  function fulfill(result) {
    state = ful;
    value = result;
    handlers.forEach(handle);
    handlers = null;
  }
  function reject(error) {
    state = rej;
    value = error;
    handlers.forEach(handle);
    handlers = null;
  }
  function handle(handler) {
    if (state === pend) {
      handlers.push(handler);
    } else {
      if (state === ful && typeof handler.onFulfilled == 'function') {
        handler.onFulfilled(value);
      }
      if (state === rej && typeof handler.onRejected === 'function') {
        handler.onRejected(value);
      }
    }
  }
  function getThen(value) {
    var t = typeof value;
    if (value && (t === 'object' || t === 'function')) {
      var then = value.then;
      if (typeof then === 'function') {
        return then;
      }
    }
    return null;
  }
  function doResolve(fn, onFulfilled, onRejected) {
    var done = false;
    try {
      fn(
        function(value) {
          if (done) return;
          done = true;
          onFulfilled(value);
        },
        function(reason) {
          if (done) return;
          done = true;
          onRejected(reason);
        }
      );
    } catch (e) {
      if (done) return;
      done = true;
      onRejected(e);
    }
  }
  function resolve(result) {
    try {
      var then = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject);
        return;
      }
      fulfill(result);
    } catch (e) {
      reject(e);
    }
  }
  this.done = function(onFulfilled, onRejected) {
    setTimeout(function() {
      handle(
        {
          onFulfilled,
          onRejected
        },
        0
      );
    });
  };
  this.then = function(onFulfilled, onRejected) {
    var self = this;
    return new promise(function(resolve, reject) {
      return self.done(
        function(result) {
          if (typeof onFulfilled === 'function') {
            try {
              return resolve(onFulfilled(result));
            } catch (e) {
              return reject(e);
            }
          } else {
            return resolve(result);
          }
        },
        function(error) {
          if (typeof onRejected === 'function') {
            try {
              return resolve(onRejected(error));
            } catch (e) {
              return reject(e);
            }
          } else {
            return reject(error);
          }
        }
      );
    });
  };
  doResolve(fn, resolve, reject);
}
new promise(function(res) {
  console.log(123);
  res();
}).then(function(res) {
  console.log(456);
});
