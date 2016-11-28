'use strict';

/**
 * @class: SimpleEmitter
 * @constructor
 * @author: Cedric locchi
 * @version: 0.0.1
 * @summary: Emitter Class for custom event
 */
function CustomEvent() {
  this.Listener = {};
  this.Observers = [];
}

/**
 * @description  add new listener
 * @param event {String} event name
 * @param callback {Function} callback
 */
CustomEvent.prototype.on = function (event, callback) {
    if (isValidCallbackListener(callback)) {
        defaultListener(event, this.Listener);
        this.Listener[event].push(callback);
    }
};

/**
 * @description emit an event
 * @param event {String} event name
 * @param data
 */
CustomEvent.prototype.emit = function (event, data) {
    if (!(event in this.Listener)) {
        throw new ErrorEventNotFound('event not found');
    }

    for (var i = 0; i < this.Listener[event].length; i++) {
        var handler = this.Listener[event][i];
        handler(data);
    }

};

/**
 * @description add new Observer
 * @param o {String} callback
 */
CustomEvent.prototype.addObserver = function(o) {
  if(eventNotifyIsFunction(o)){
    this.Observers.push(o);
  }
};

/**
 * @description notify oberser
 * @param event {String} event name
 */
CustomEvent.prototype.notify = function(event) {
  for(var i = 0; i<this.Observers.length; i++) {
    this.Observers[i](event);
  }
};

/**
 * @description count listener
 * @return listener
 */
CustomEvent.prototype.countListener = function(){
  return Object.keys(this.Listener).length;
}

/**
 * @description count observers
 * @return observers
 */
CustomEvent.prototype.countObserver = function(){
  return this.Observers.length;
};

/**
 * @description remove a listenr
 * @param event {String} even name
 */
CustomEvent.prototype.removeListener = function (event) {
    if (isIndexOfListenerExist(event, this.Listener)) {
        delete this.Listener[event];
    }
};

/**
 * @description remove a Observer
 * @param event {String} even name
 */
CustomEvent.prototype.removeObserver = function(event) {
    if(isIndexOfListenerExist(event, this.Observers)) {
      delete this.Observers[event];
    }
}

/**
 * @description return listeners
 * @return {Object}
 */
CustomEvent.prototype.getListener = function () {
    return this.Listener;
};

/**
 * @description return listeners
 * @return {Array}
*/
CustomEvent.prototype.getArrayListener = function(){
    return Object.keys(this.Listener);
};

/**
 * @description return Observers liste
 * @return {Array}
 */
CustomEvent.prototype.getObserver = function(){
  return this.Observers;
}
