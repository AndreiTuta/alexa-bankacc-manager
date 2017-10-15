# counter

A profiling counter for Node.js.

#### Installation
```shell
npm install dannynemer/counter
```

#### Usage
```js
var counter = require('counter')

for (var i = 0; i < 100; ++i) {
  if (i % 2 === 0) counter.count('even')
}

counter.end('even')
// => Resets the count for 'even' to 0
// => Prints "even: 50"

for (var i = 0; i < 99; ++i) {
  counter.count(i % 2 === 0 ? 'even' : 'odd')
  if (i > 100) counter.count('never reached')
}

counter.endAll()
// => Resets all counts to 0
// => Prints "even: 50 (50.5%)
//            odd: 50 (49.5%)"
```

<!-- div class="toc-container" -->

<!-- div -->

## `counter`
* <a href="#counter-count">`counter.count`</a>
* <a href="#counter-end">`counter.end`</a>
* <a href="#counter-endAll">`counter.endAll`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `counter`

<!-- div -->

### <a id="counter-count"></a>`counter.count(label)`
<a href="#counter-count">#</a> [&#x24C8;](https://github.com/DannyNemer/counter/blob/master/counter.js#L34 "View in source") [&#x24C9;][1]

Increments the invocation count for `label`. Use `counter.end(label)` or `counter.endAll()` to print the counter's value. This is useful to profile the number of times a section of code is reached.

#### Arguments
1. `label` *(string)*: The counter identifier.

#### Example
```js
for (var i = 0; i < 100; ++i) {
  if (i % 2 === 0) counter.count('even')
}

counter.end('even')
// => Resets the count for 'even' to 0
// => Prints "even: 50"
```
* * *

<!-- /div -->

<!-- div -->

### <a id="counter-end"></a>`counter.end(label)`
<a href="#counter-end">#</a> [&#x24C8;](https://github.com/DannyNemer/counter/blob/master/counter.js#L45 "View in source") [&#x24C9;][1]

Prints (and resets the value of) the number of `counter.count(label)` invocations.

#### Arguments
1. `label` *(string)*: The counter identifier.

* * *

<!-- /div -->

<!-- div -->

### <a id="counter-endAll"></a>`counter.endAll`
<a href="#counter-endAll">#</a> [&#x24C8;](https://github.com/DannyNemer/counter/blob/master/counter.js#L73 "View in source") [&#x24C9;][1]

Prints (and resets the values of) the counter value of each label recorded by `counter.count()`, and each counter's value as a percentage of all counters.
<br>
<br>
Does not print counters that are never reached (having not initialized their keys). Prints counts in order of decreasing value.

#### Example
```js
for (var i = 0; i < 99; ++i) {
  counter.count(i % 2 === 0 ? 'even' : 'odd')
}

counter.endAll()
// => Prints counts for all labels and resets all to 0
```
Output:
<br><img src="https://raw.githubusercontent.com/DannyNemer/counter/master/doc/counter-endAll-example.jpg" alt="counter.endAll() example output"/>
* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #counter "Jump back to the TOC."
