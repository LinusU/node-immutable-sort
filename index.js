'use strict'

module.exports = function immutableSort (array, cmp) {
  return array.slice(0).sort(cmp)
}
