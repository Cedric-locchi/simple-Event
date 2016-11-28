'use strict';

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
