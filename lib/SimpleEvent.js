'use strict';
/**
 * @class ErrorEventNotFound
 * @constructor
 * @description Custom Event Error for Emitter class
 * @author Cedric locchi
 * @version 0.0.1
 */
function ErrorEventNotFound(message) {
    this.name = 'Event error';
    this.message = message || 'error event';
    this.stack = new Error().stack;
}
ErrorEventNotFound.prototype = Object.create(Error.prototype);
ErrorEventNotFound.prototype.constructor = ErrorEventNotFound;
/**
 * @class ErrorEventCallback
 * @constructor
 * @description Custom Callback Error for Emitter class
 * @author Cedric locchi
 * @version 0.0.1
 */
function ErrorEventCallback(message) {
    this.name = 'Callback Event Error';
    this.message = message || 'callback error event';
    this.stack = new Error().stack;
}
ErrorEventCallback.prototype = Object.create(Error.prototype);
ErrorEventCallback.prototype.constructor = ErrorEventCallback;
/**
 * @class ErrorFunctionForObserver
 * @constructor 
 * @description Custom Observer notify Error for Observers class
 * @author Cedric locchi
 * @version 0.0.1
 */
function ErrorFunctionForObserver(message) {
    this.name = 'Error, Notify is a function';
    this.name = message || 'notify error function';
    this.stack = new Error().stack;
}
ErrorFunctionForObserver.prototype = Object.create(Error.prototype);
ErrorFunctionForObserver.prototype.constructor = ErrorFunctionForObserver;
/**
 * @description check if the callback is valide
 * @param callback
 * @returns trus if the callback is valide
 * @author Cedric locchi
 * @version 0.0.1
 */
function isValidCallbackListener(callback) {
    if (typeof callback !== 'function') {
        throw new ErrorEventCallback('callback must be a function');
    }
    return true;
}
/**
 * @description define a default listener if the event is undefined
 * @param event
 * @param listener
 * @author Cedric locchi
 * @version 0.0.1
 */
function defaultListener(event, listener) {
    if (typeof listener[event] === 'undefined') {
        listener[event] = [];
    }
}
/**
 * @description check if the event exist in listener
 * @param event
 * @param listener
 * @author Cedric locchi
 * @version 0.0.1
 */
function isIndexOfListenerExist(event, listener) {
    if (typeof listener === 'object') {
        var index = Object.keys(listener).indexOf(event);
    } else {
        var index = listener.indexOf(event);
    }
    if (index === -1) {
        throw new ErrorEventNotFound('event not found');
    }
    return true;
}
/**
 * @description check if the event is a function
 * @param event
 * @param listener
 * @author Cedric locchi
 * @version 0.0.1
 */
function eventNotifyIsFunction(event) {
    if (typeof event !== 'function') {
        throw new ErrorFunctionForObserver('notify must be a function');
    }
    return true;
}
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
CustomEvent.prototype.addObserver = function (o) {
    if (eventNotifyIsFunction(o)) {
        this.Observers.push(o);
    }
};
/**
 * @description notify oberser
 * @param event {String} event name
 */
CustomEvent.prototype.notify = function (event) {
    for (var i = 0; i < this.Observers.length; i++) {
        this.Observers[i](event);
    }
};
/**
 * @description count listener
 * @return listener
 */
CustomEvent.prototype.countListener = function () {
    return Object.keys(this.Listener).length;
};
/**
 * @description count observers
 * @return observers
 */
CustomEvent.prototype.countObserver = function () {
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
CustomEvent.prototype.removeObserver = function (event) {
    if (isIndexOfListenerExist(event, this.Observers)) {
        delete this.Observers[event];
    }
};
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
CustomEvent.prototype.getArrayListener = function () {
    return Object.keys(this.Listener);
};
/**
 * @description return Observers liste
 * @return {Array}
 */
CustomEvent.prototype.getObserver = function () {
    return this.Observers;
};