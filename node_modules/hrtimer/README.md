# hrtimer

A high resolution timer for Node.js with precision in milliseconds.

#### Installation
```shell
npm install dannynemer/hrtimer
```

#### Usage
```js
var hrtimer = require('hrtimer')

// Start timer
hrtimer.start('my test')

// ...stuff...

hrtimer.end('my test')
// => Prints "my test: 13.264 ms"

// ...more stuff...

hrtimer.end('my test')
// => Prints "my test: 31.183 ms"
```

<!-- div class="toc-container" -->

<!-- div -->

## `hrtimer`
* <a href="#hrtimer-start">`hrtimer.start`</a>
* <a href="#hrtimer-end">`hrtimer.end`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `hrtimer`

<!-- div -->

### <a id="hrtimer-start"></a>`hrtimer.start(label)`
<a href="#hrtimer-start">#</a> [&#x24C8;](https://github.com/DannyNemer/hrtimer/blob/master/hrtimer.js#L25 "View in source") [&#x24C9;][1]

Starts a high-resolution timer (with precision in microseconds) identified by `label`. Use `hrtimer.end(label)` to print the timer's current value.

#### Arguments
1. `label` *(string)*: The timer identifier.

* * *

<!-- /div -->

<!-- div -->

### <a id="hrtimer-end"></a>`hrtimer.end(label)`
<a href="#hrtimer-end">#</a> [&#x24C8;](https://github.com/DannyNemer/hrtimer/blob/master/hrtimer.js#L36 "View in source") [&#x24C9;][1]

Prints the current high-resolution value of a timer initiated with `hrtimer.start(label)`.

#### Arguments
1. `label` *(string)*: The timer identifier.

* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #hrtimer "Jump back to the TOC."
