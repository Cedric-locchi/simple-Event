## Classes

<dl>
<dt><a href="#ErrorEventNotFound">ErrorEventNotFound</a></dt>
<dd><p>ErrorEventNotFound</p>
</dd>
<dt><a href="#ErrorEventCallback">ErrorEventCallback</a></dt>
<dd><p>ErrorEventCallback</p>
</dd>
<dt><a href="#ErrorFunctionForObserver">ErrorFunctionForObserver</a></dt>
<dd><p>ErrorFunctionForObserver</p>
</dd>
<dt><a href="#CustomEvent">CustomEvent</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#isValidCallbackListener">isValidCallbackListener(callback)</a> ⇒</dt>
<dd><p>check if the callback is valide</p>
</dd>
<dt><a href="#defaultListener">defaultListener(event, listener)</a></dt>
<dd><p>define a default listener if the event is undefined</p>
</dd>
<dt><a href="#isIndexOfListenerExist">isIndexOfListenerExist(event, listener)</a></dt>
<dd><p>check if the event exist in listener</p>
</dd>
<dt><a href="#eventNotifyIsFunction">eventNotifyIsFunction(event, listener)</a></dt>
<dd><p>check if the event is a function</p>
</dd>
</dl>

<a name="ErrorEventNotFound"></a>

## ErrorEventNotFound
ErrorEventNotFound

**Kind**: global class  
**Version**: 0.0.1  
**Author:** Cedric locchi  
<a name="new_ErrorEventNotFound_new"></a>

### new ErrorEventNotFound()
Custom Event Error for Emitter class

<a name="ErrorEventCallback"></a>

## ErrorEventCallback
ErrorEventCallback

**Kind**: global class  
**Version**: 0.0.1  
**Author:** Cedric locchi  
<a name="new_ErrorEventCallback_new"></a>

### new ErrorEventCallback()
Custom Callback Error for Emitter class

<a name="ErrorFunctionForObserver"></a>

## ErrorFunctionForObserver
ErrorFunctionForObserver

**Kind**: global class  
**Version**: 0.0.1  
**Author:** Cedric locchi  
<a name="new_ErrorFunctionForObserver_new"></a>

### new ErrorFunctionForObserver()
Custom Observer notify Error for Observers class

<a name="CustomEvent"></a>

## CustomEvent
**Kind**: global class  
**Class:**: SimpleEmitter  
**Author:**: Cedric locchi  
**Version:**: 0.0.1  
**Summary:**: Emitter Class for custom event  

* [CustomEvent](#CustomEvent)
    * [.on(event, callback)](#CustomEvent+on)
    * [.emit(event, data)](#CustomEvent+emit)
    * [.addObserver(o)](#CustomEvent+addObserver)
    * [.notify(event)](#CustomEvent+notify)
    * [.countListener()](#CustomEvent+countListener) ⇒
    * [.countObserver()](#CustomEvent+countObserver) ⇒
    * [.removeListener(event)](#CustomEvent+removeListener)
    * [.removeObserver(event)](#CustomEvent+removeObserver)
    * [.getListener()](#CustomEvent+getListener) ⇒ <code>Object</code>
    * [.getArrayListener()](#CustomEvent+getArrayListener) ⇒ <code>Array</code>
    * [.getObserver()](#CustomEvent+getObserver) ⇒ <code>Array</code>

<a name="CustomEvent+on"></a>

### customEvent.on(event, callback)
add new listener

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | event name |
| callback | <code>function</code> | callback |

<a name="CustomEvent+emit"></a>

### customEvent.emit(event, data)
emit an event

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | event name |
| data |  |  |

<a name="CustomEvent+addObserver"></a>

### customEvent.addObserver(o)
add new Observer

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>String</code> | callback |

<a name="CustomEvent+notify"></a>

### customEvent.notify(event)
notify oberser

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | event name |

<a name="CustomEvent+countListener"></a>

### customEvent.countListener() ⇒
count listener

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  
**Returns**: listener  
<a name="CustomEvent+countObserver"></a>

### customEvent.countObserver() ⇒
count observers

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  
**Returns**: observers  
<a name="CustomEvent+removeListener"></a>

### customEvent.removeListener(event)
remove a listenr

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | even name |

<a name="CustomEvent+removeObserver"></a>

### customEvent.removeObserver(event)
remove a Observer

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | even name |

<a name="CustomEvent+getListener"></a>

### customEvent.getListener() ⇒ <code>Object</code>
return listeners

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  
<a name="CustomEvent+getArrayListener"></a>

### customEvent.getArrayListener() ⇒ <code>Array</code>
return listeners

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  
<a name="CustomEvent+getObserver"></a>

### customEvent.getObserver() ⇒ <code>Array</code>
return Observers liste

**Kind**: instance method of <code>[CustomEvent](#CustomEvent)</code>  
<a name="isValidCallbackListener"></a>

## isValidCallbackListener(callback) ⇒
check if the callback is valide

**Kind**: global function  
**Returns**: trus if the callback is valide  
**Version**: 0.0.1  
**Author:** Cedric locchi  

| Param |
| --- |
| callback | 

<a name="defaultListener"></a>

## defaultListener(event, listener)
define a default listener if the event is undefined

**Kind**: global function  
**Version**: 0.0.1  
**Author:** Cedric locchi  

| Param |
| --- |
| event | 
| listener | 

<a name="isIndexOfListenerExist"></a>

## isIndexOfListenerExist(event, listener)
check if the event exist in listener

**Kind**: global function  
**Version**: 0.0.1  
**Author:** Cedric locchi  

| Param |
| --- |
| event | 
| listener | 

<a name="eventNotifyIsFunction"></a>

## eventNotifyIsFunction(event, listener)
check if the event is a function

**Kind**: global function  
**Version**: 0.0.1  
**Author:** Cedric locchi  

| Param |
| --- |
| event | 
| listener | 

