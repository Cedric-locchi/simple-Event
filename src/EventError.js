'use strict';

/**
 * @class ErrorEventNotFound
 * @summary Custom Event Error for Emitter class
 * @author Cedric locchi
 * @version 0.0.1
 */
function ErrorEventNotFound(message) {
    this.name = 'Event error';
    this.message = message || 'error event';
    this.stack = (new Error()).stack;
}

ErrorEventNotFound.prototype = Object.create(Error.prototype);
ErrorEventNotFound.prototype.constructor = ErrorEventNotFound;


/**
 * @class ErrorEventCallback
 * @summary Custom Callback Error for Emitter class
 * @author Cedric locchi
 * @version 0.0.1
 */
function ErrorEventCallback(message) {
    this.name = 'Callback Event Error';
    this.message = message || 'callback error event';
    this.stack = (new Error()).stack;
}

ErrorEventCallback.prototype = Object.create(Error.prototype);
ErrorEventCallback.prototype.constructor = ErrorEventCallback;


/**
 * @class ErrorFunctionForObserver
 * @summary Custom Observer notify Error for Observers class
 * @author Cedric locchi
 * @version 0.0.1
 */
function ErrorFunctionForObserver(message) {
    this.name = 'Error, Notify is a function';
    this.name = message || 'notify error function';
    this.stack = (new Error()).stack;
}

ErrorFunctionForObserver.prototype = Object.create(Error.prototype);
ErrorFunctionForObserver.prototype.constructor = ErrorFunctionForObserver;
