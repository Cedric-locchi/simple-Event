# Simple event custom class
## it is juste a personal project

for beginning:

- build the src with gulp, juste run ```gulp```


she's easy to use

for use emitter class:

```javascript

  var emit = new CustomEvent();

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
          click: new CustomEvent()
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

[API documentation](docs/API.md)


### TODO LIST

- [ ] Make a units tests
- [ ] Make a better API documentation
- [ ] Commonjs module
- [ ] ES6 ready
