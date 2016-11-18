'use strict';

/**
 * @class: SimpleEmitter
 * @author: Cedric locchi
 * @version: 0.0.1
 * @summary: Emitter Class for custom event
 */
function SimpleEmitter() {this.Listener = {};}

/**
 * @summary add new listener 
 * @param event {String} event name
 * @param callback {Function} callback
 */
SimpleEmitter.prototype.on = function (event, callback) {
    if (isValidCallbackListener(callback)) {
        defaultListener(event, this.Listener);
        this.Listener[event].push(callback);
    }
};

/**
 * @summary emit an event
 * @param event {String} event name 
 * @param data 
 */
SimpleEmitter.prototype.emit = function (event, data) {
    if (!(event in this.Listener)) {
        throw new ErrorEventNotFound('event not found');
    }

    for (var i = 0; i < this.Listener[event].length; i++) {
        var handler = this.Listener[event][i];
        handler(data);
    }

};

/**
 * @summary remove a listenr 
 * @param event {String} even name 
 */
SimpleEmitter.prototype.remove = function (event) {
    if (isIndexOfListenerExist(event, this.Listener)) {
        delete this.Listener[event];
    }
};

/**
 * @summary return listeners
 * @return {Object}
 */
SimpleEmitter.prototype.getListener = function () {
    return this.Listener;
};

/**
 * @summary return listeners
 * @return {Array}
*/
SimpleEmitter.prototype.getArrayListener = function(){
    return Object.keys(this.Listener);
};