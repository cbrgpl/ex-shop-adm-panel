// String
import capitalize from './utils/string.capitalize'
import lookbehind from './utils/string.lookbehindAlter'
// Number
// Boolean
// Array
import remove from './utils/array.remove'
import equals from './utils/array.equals'
import unique from './utils/array.unique'
import exclude from './utils/array.exclude'
// Object
import isIterable from './utils/object.isIterable'

const extendModule = {
  string: {
    capitalize,
    lookbehind,
  },
  number: {
  },
  boolean: {
  },
  array: {
    remove,
    equals,
    unique,
    exclude
  },
  object: {
    isIterable,
  }
}

export const stringUtils = extendModule.string
export const numberUtils = extendModule.number
export const booleanUtils = extendModule.boolean
export const arrayUtils = extendModule.array
export const objectUtils = extendModule.object
