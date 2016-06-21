'use strict'

var sort = require('./')
var assert = require('assert')

var a = [1, 5, 2, 4, 3]
var b = [5, 2, 4, 3, 1]

assert.deepEqual(sort(a), [1, 2, 3, 4, 5])
assert.deepEqual(sort(b), [1, 2, 3, 4, 5])

assert.deepEqual(a, [1, 5, 2, 4, 3])
assert.deepEqual(b, [5, 2, 4, 3, 1])

assert.deepEqual(sort(a, function (lhs, rhs) { return rhs - lhs }), [5, 4, 3, 2, 1])
assert.deepEqual(sort(b, function (lhs, rhs) { return rhs - lhs }), [5, 4, 3, 2, 1])

assert.deepEqual(a, [1, 5, 2, 4, 3])
assert.deepEqual(b, [5, 2, 4, 3, 1])
