Nkdash
=========================
[![Build Status](https://travis-ci.org/gnk-sato-hotto/nkdash.svg?branch=master)](https://travis-ci.org/gnk-sato-hotto/nkdash)  
Nkdash is a javascript library that includes very useful methods.

# Supported node versions
- 7
- 6
- 5

# To use
```
npm install nkdash
```

```
import {isNumber} from 'nkdash';

if(isNumber('1200')) {
  console.log("Success!");
}
```

# Methods
* pluck  

```
import {pluck} from 'nkdash';

const collection = [
  {a: 1, b: 11, c: 111},
  {a: 2, b: 22, c: 222},
  {a: 3, b: 33, c: 333},
];

console.log(pluck(collection, 'a')); // => [1, 2, 3]
```

* isDate

```
import {isDate} from 'nkdash';

const date = new Date();


console.log(isDate(date));     // => true
console.log(isDate(100));      // => false
console.log(isDate('string')); // => false
```

* isEnter

```
import {isEnter} from 'nkdash';

const keyCode = 13;

console.log(isEnter(keyCode)); // => true
console.log(isEnter(14));      // => false
```

* isAscii

```
import {isAscii} from 'nkdash';

console.log(isAscii('0')); // => true
console.log(isAscii('a')); // => true
console.log(isAscii('?')); // => true

console.log(isAscii('０')); // => false
console.log(isAscii('ａ')); // => false
console.log(isAscii('？')); // => false
```

* isNumber

```
import {isNumber} from 'nkdash';

console.log(isNumber('0'));    // => true
console.log(isNumber('1200')); // => true
console.log(isNumber(3200));   // => true

console.log(isNumber('09')); // => false
console.log(isNumber('1a')); // => false
```

* isFullWidth

```
import {isFullWidth} from 'nkdash';

console.log(isFullWidth('全'));    // => true
console.log(isFullWidth('1')); // => false
```

* dateList

```
import {dateList} from 'nkdash';

const startDate = new Date('2017-01-01');
const endDate   = new Date('2017-01-03');

console.log(dateList(startDate, endDate));
// => [
//      moment('2017-01-01'),
//      moment('2017-01-02'),
//      moment('2017-01-03'),
//    ]
```

* randomStr

```
import {randomStr} from 'nkdash';

const strLength = 5;
console.log(randomStr(strLength)); // => x80k9
```

* currentUrl

```
import {currentUrl} from 'nkdash';

// currentUrl: https://localhost/hoge/fuga?hoge=1
console.log(currentUrl()); // => https://localhost/hoge/fuga
console.log(currentUrl(false)); // => https://localhost/hoge/fuga?hoge=1
```

* compareDeep

```
import {compareDeep} from 'nkdash';

const v1 = [1, 'string', {a: 12, b: {c: 'nested'}}];
const v2 = [1, 'string', {b: {c: 'nested'}, a: 12}];
console.log(comparedeep(v1, v2)); // => true

const v3 = {
  a: 123,
  b: 'alph',
  c: [312, 90],
};

const v4 = {
  c: [90, 312],
  a: 123,
  b: 'alph',
};
console.log(comparedeep(v3, v4)); // => true
```

* ellipsisInt

```
import {ellipsisInt} from 'nkdash';

console.log(ellipsisInt(100));  // => 100
console.log(ellipsisInt(1000)); // => 1 k
console.log(ellipsisInt(3860)); // => 3.9 k
// supported: k, m, b
```

* ellipsisStr

```
import {ellipsisStr} from 'nkdash';

console.log(ellipsisStr('abcdefg'));    // => 'abcde…'
console.log(ellipsisStr('abcdefg', 3)); // => 'abc…'
```

* moneyFormat

```
import {moneyFormat} from 'nkdash';

console.log(moneyFormat(1123456)); // => '1,123,456'
```

* isValidEmail

```
import {isValidEmail} from 'nkdash';

console.log(isValidEmail('abcd@hoge.com')); // => true
console.log(isValidEmail('abcd@hoge'));     // => false
// valid email format => xxx@xxx.xx
```

* containsEmoji

```
import {containsEmoji} from 'nkdash';

console.log(containsEmoji('contains emoji❗'));    // => true
console.log(containsEmoji('not contains emoji')); // => false
```

* containsSpace

```
import {containsSpace} from 'nkdash';

console.log(containsSpace('contains half-width-space'));  // => true
console.log(containsSpace('contains　full-width-space')); // => true
console.log(containsSpace('not contains space')); // => false
```

* isEmptyArray

```
import {isEmptyArray} from 'nkdash';

console.log(isEmptyArray([]));   // => true
console.log(isEmptyArray([1]));  // => false
console.log(isEmptyArray(120));  // => false
console.log(isEmptyArray(true)); // => false
```

* isNotEmptyArray

```
import {isNotEmptyArray} from 'nkdash';

console.log(isNotEmptyArray([1]));  // => true
console.log(isNotEmptyArray([]));   // => false
console.log(isNotEmptyArray(120));  // => false
console.log(isNotEmptyArray(true)); // => false
```

* containsSpecialChar

```
import {containsSpecialChar} from 'nkdash';

// special chars => !@#$%^&*()+=-[]\';,./{}|":<>?
console.log(containsSpecialChar('hello world!')); // => true
console.log(containsSpecialChar('hello"world')); // => true
```

* containsMark

```
import {containsMark} from 'nkdash';

// marks => !@#$%^&*\\\'\"?
console.log(containsMark('#hashtag')); // => true
console.log(containsMark('hello world')); // => false
```

* gradationColors

```
import {gradationColors} from 'nkdash';

const from  = "#000000";
const to    = "#ffffff";
const count = 4;
console.log(gradationColors(from, to, count));
// => ["#000000", "#3f3f3f", "#7f7f7f", "#ffffff"]
```

* hasValue

```
import {hasValue} from 'nkdash';

// if a variable is false or null or undefined, return false.
console.log(hasValue(false)); => false
console.log(hasValue(0));  => true
console.log(hasValue([])); => true
console.log(hasValue("")); => true
console.log(hasValue("hello")); => true
```


* isEdge

```
// return true if ua includes "edge"
```

* isChrome

```
// return true if not edge and ua includes "chrome"
```

* isSafari

```
// return true if not chrome and ua includes "safari"
```

* isFireFox

```
// return true if ua includes "firefox"
```

* isTabletOrMobile

```
// return true if ua.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
```

* toColorCode

```
import {toColorCode} from 'nkdash';

const input = {r: 144, g: 16, b: 77};
console.log(toColorCode(input)) // "#90104d"
```

* toRGB

```
import {toRGB} from 'nkdash';

const input = "#90104d";
console.log(toRGB(input)) // {r: 144, g: 16, b: 77};
```


# License
  This software is released under the MIT License, see LICENSE.txt.
