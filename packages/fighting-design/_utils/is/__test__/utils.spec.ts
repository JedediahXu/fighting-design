import { expect, test } from 'vitest'
import { isDate, isString, isNumber, isBoolean, isObject, isFunction, isArray, isTrue } from '..'

test('isDate', () => {
  expect(isDate(1)).toBe(false)
  expect(isDate('2024')).toBe(false)
  expect(isDate(true)).toBe(false)
  expect(isDate(null)).toBe(false)
  expect(isDate(void 0)).toBe(false)
  expect(isDate({})).toBe(false)
  expect(isDate([])).toBe(false)
  expect(isDate(Symbol)).toBe(false)
  expect(isDate(new Set())).toBe(false)
  expect(isDate(Date())).toBe(false)
  expect(isDate(new Date())).toBe(true)
  expect(isDate(new Date)).toBe(true)
  expect(isDate(Date)).toBe(false)
})

test('isString', () => {
  expect(isString(1)).toBe(false)
  expect(isString('2024')).toBe(true)
  expect(isString(`2024`)).toBe(true)
  expect(isString(true)).toBe(false)
  expect(isString(null)).toBe(false)
  expect(isString(void 0)).toBe(false)
  expect(isString({})).toBe(false)
  expect(isString([])).toBe(false)
  expect(isString(new Set())).toBe(false)
  expect(isString(new Date)).toBe(false)
  expect(isString(Date)).toBe(false)
})

test('isNumber', () => {
  expect(isNumber(1)).toBe(true)
  expect(isNumber(1.111)).toBe(true)
  expect(isNumber(NaN)).toBe(false)
  expect(isNumber('2024')).toBe(false)
  expect(isNumber(`2024`)).toBe(false)
  expect(isNumber(false)).toBe(false)
  expect(isNumber(null)).toBe(false)
  expect(isNumber(void 0)).toBe(false)
  expect(isNumber({})).toBe(false)
  expect(isNumber([])).toBe(false)
  expect(isNumber(new Set())).toBe(false)
  expect(isNumber(new Date)).toBe(false)
  expect(isNumber(Date)).toBe(false)
})

test('isBoolean', () => {
  expect(isBoolean(1)).toBe(false)
  expect(isBoolean(1.111)).toBe(false)
  expect(isBoolean(NaN)).toBe(false)
  expect(isBoolean('2024')).toBe(false)
  expect(isBoolean(`2024`)).toBe(false)
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean(!null)).toBe(true)
  expect(isBoolean(void 0)).toBe(false)
  expect(isBoolean({})).toBe(false)
  expect(isBoolean([])).toBe(false)
  expect(isBoolean(new Set())).toBe(false)
  expect(isBoolean(new Date)).toBe(false)
  expect(isBoolean(Date)).toBe(false)
})

class User { }

test('isObject', () => {
  expect(isObject(1)).toBe(false)
  expect(isObject(1.111)).toBe(false)
  expect(isObject(NaN)).toBe(false)
  expect(isObject('2024')).toBe(false)
  expect(isObject(`2024`)).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject(true)).toBe(false)
  expect(isObject(null)).toBe(false)
  expect(isObject(!null)).toBe(false)
  expect(isObject(void 0)).toBe(false)
  expect(isObject({})).toBe(true)
  expect(isObject(new User)).toBe(true)
  expect(isObject([])).toBe(false)
  expect(isObject(new Set())).toBe(false)
  expect(isObject(new Date)).toBe(false)
  expect(isObject(Date)).toBe(false)
})

test('isFunction', () => {
  expect(isFunction(1)).toBe(false)
  expect(isFunction(1.111)).toBe(false)
  expect(isFunction(NaN)).toBe(false)
  expect(isFunction('2024')).toBe(false)
  expect(isFunction(`2024`)).toBe(false)
  expect(isFunction(false)).toBe(false)
  expect(isFunction(true)).toBe(false)
  expect(isFunction(null)).toBe(false)
  expect(isFunction(!null)).toBe(false)
  expect(isFunction(void 0)).toBe(false)
  expect(isFunction({})).toBe(false)
  expect(isFunction(new User)).toBe(false)
  expect(isFunction([])).toBe(false)
  expect(isFunction(new Set())).toBe(false)
  expect(isFunction(new Date)).toBe(false)
  expect(isFunction(Date)).toBe(true)
  expect(isFunction(new Function())).toBe(true)
  expect(isFunction(new Function)).toBe(true)
  expect(isFunction(() => { })).toBe(true)
  expect(isFunction(function () { })).toBe(true)
})

test('isArray', () => {
  expect(isArray(1)).toBe(false)
  expect(isArray(1.111)).toBe(false)
  expect(isArray(NaN)).toBe(false)
  expect(isArray('2024')).toBe(false)
  expect(isArray(`2024`)).toBe(false)
  expect(isArray(false)).toBe(false)
  expect(isArray(true)).toBe(false)
  expect(isArray(null)).toBe(false)
  expect(isArray(!null)).toBe(false)
  expect(isArray(void 0)).toBe(false)
  expect(isArray({})).toBe(false)
  expect(isArray(new User)).toBe(false)
  expect(isArray([])).toBe(true)
  expect(isArray(new Array)).toBe(true)
  expect(isArray(new Array)).toBe(true)
  expect(isArray(new Set())).toBe(false)
  expect(isArray(new Date)).toBe(false)
  expect(isArray(Date)).toBe(false)
  expect(isArray(() => { })).toBe(false)
  expect(isArray(function () { })).toBe(false)
})

test('isTrue', () => {
  expect(isTrue(1)).toBe(true)
  expect(isTrue(1.111)).toBe(true)
  expect(isTrue(NaN)).toBe(false)
  expect(isTrue('2024')).toBe(true)
  expect(isTrue(`2024`)).toBe(true)
  expect(isTrue(false)).toBe(true)
  expect(isTrue(true)).toBe(true)
  expect(isTrue(null)).toBe(false)
  expect(isTrue(!null)).toBe(true)
  expect(isTrue(void 0)).toBe(false)
  expect(isTrue({})).toBe(true)
  expect(isTrue(new User)).toBe(true)
  expect(isTrue([])).toBe(true)
  expect(isTrue(new Array)).toBe(true)
  expect(isTrue(new Array)).toBe(true)
  expect(isTrue(new Set())).toBe(true)
  expect(isTrue(new Date)).toBe(true)
  expect(isTrue(Date)).toBe(true)
  expect(isTrue(() => { })).toBe(true)
  expect(isTrue(function () { })).toBe(true)
})