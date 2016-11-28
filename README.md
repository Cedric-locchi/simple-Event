# Simple event custom class
## it is juste a personal project

for beginning:

- build the src with gulp, juste run ```gulp```


she's easy to use

for use emitter class:

```javascript

  var emit = new SimpleEmitter();

  emit.on('eventCustom', function (data) {
      console.log(data);
  });

  emit.emit('eventCustom', [1, 2, 3]);


```

For Use Observer Class:

Create a class that will use the class Observer:

```javascript

  var button = function(){
      this.observers = {
          click: new SimpleObeserver()
      }
  }

  button.prototype.addObserver = function(event, o){
      this.observers[event].addObserver(o);
  }

  button.prototype.click = function(){

      var event = {
          source: this
      }

      this.observers['click'].notify(event);
  }

```

and use this class like this

```javascript

  var btn = new button();

  btn.addObserver('click', function(){
      console.log('test');
  });

  btn.click();
  
```

### TODO LIST

- [ ] Make a units tests
- [ ] Commonjs module
- [ ] ES6 ready
