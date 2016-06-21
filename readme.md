# Immutable Sort

Immutable sort function for javascript.

## Installation

```sh
npm install --save immutable-sort
```

## Usage

```js
const sort = require('immutable-sort')
const array = [1, 5, 2, 4, 3]

const sortedArray = sort(array)

// [1, 5, 2, 4, 3]
console.log(array)

// [1, 2, 3, 4, 5]
console.log(sortedArray)
```

## API

### `sort<T>(array: T[], compare?: Function) -> T[]`

Sorts the array `array`, optionally with the provided compare function `compare`
and returns a new sorted array. The input is not modified in any way.
