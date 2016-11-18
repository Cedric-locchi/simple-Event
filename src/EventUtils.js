'use strict';

/**
 * @summary check if the callback is valide
 * @param callback
 * @returns trus if the callback is valide
 */
function isValidCallbackListener(callback) {
    if (typeof callback !== 'function') {
        throw new ErrorEventCallback('callback must be a function');
    }

    return true;
}

/**
 * @summary define a default listener if the event is undefined
 * @param event 
 * @param listener
 */
function defaultListener (event, listener) {
    if (typeof listener[event] === 'undefined') {
        listener[event] = [];
    }
}

/**
 * @summary check if the event exist in listener
 * @param event
 * @param listener
 */
function isIndexOfListenerExist (event, listener) {
    var index = Object.keys(listener).indexOf(event);

    if (index === -1) {
        throw new ErrorEventNotFound('event not found');
    }

    return true;
}