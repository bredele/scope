
# scope

  Extends the scope chain for a statement

## Installation

  Install scope [component](http://component.io):

    $ component install bredele/scope

## Usage


```js
  var scope = require('scope');
  var fn = scope("name + ' wietrich' ");

  fn({
    name: 'olivier'
  }); //olivier wietrich 
```

## License

  MIT
