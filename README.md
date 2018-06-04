# fn-select.js

## usage 

### ``_``

the ``_`` functions takes a boolean value as decider, a callback and as many arguments as the callback needs. the return value will be a closure holding the successor of the callback on the decider.

the ``_`` will only be used inside a ``select`` or ``selectFirst`` function.

schema: ``_(decider, callback, ...args)``

example: ``_(true, console.log, 'hello ', 'world')``

### ``select``

the ``select`` function will check, if a given decider is true and execute its callback with the given arguments. the return values of the executed callbacks will be returned as array.

the ``select`` function itself takes a collection of ``_`` functions as parameters.

**example 1**

```JavaScript
import {_, select} from 'select-n';

select(
  _(false, console.log, '#1'),
  _(true, console.log, '#2'),
  _(true, console.log, '#3.1 ', '#3.2')
);
```

expected output:

```JavaScript
#2
#3.1 #3.2
```

**example 2**

```JavaScript
import {_, select} from 'select-n';

function add(x, y){
  return x+y;
}

select(
  _(false, add, 1, 2),
  _(true, add, 1, 3),
  _(true, add, 1, 4)
).forEach(res => console.log(res));
```

expected output:

```JavaScript
4
5
```


### ``selectFirst``

the ``selectFirst`` function can be used like the ``select``function

the difference is, that ``selectFirst`` only executes the first argument, which decider is ``true``

the return value is the callbacks return value or null, if no decider is true
