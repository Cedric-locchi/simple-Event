'use strict';

/**
 * @class: SimpleObeserver
 * @author: Cedric locchi
 * @version: 0.0.1
 * @summary: observer Class for custom event
 */
function SimpleObeserver(){
  this.observers = [];
}

/**
 * @summary add new Observer
 * @param o {String} callback
 */
SimpleObeserver.prototype.addObserver = function(o) {
  if(typeof o === 'function'){
    this.observers.push(o);
  } else {
    throw new ErrorFunctionForObserver('observer params must be a function');
  }
};

/**
 * @summary notify oberser
 * @param event {String} event name
 */
SimpleObeserver.prototype.notify = function(event) {
  for(var i = 0; i<this.observers.length; i++) {
    this.observers[i](event);
  }
};

/**
 * @summary count observers
 * @return observers
 */
SimpleObeserver.prototype.count = function(){
  return this.observers.length;
};
