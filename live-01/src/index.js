const EntityBase = require('./EntityBase');
const assert = require('assert');
const Employee = require('./Employee');
const Util = require('./Util');
const Manager = require('./Manager');

const GENDER = Object.freeze({
  MALE: 'male',
  FEMALE: 'female'
})

{
  const employee = new Employee({
    name: 'Jardel',
    gender: GENDER.MALE,
  })

  assert.throws(() => employee.birthYear, { message: 'you must define age first!!!' })
}
const CURRENT_DATE = 2021
Date.prototype.getFullYear = () => CURRENT_DATE

{
  const employee = new Employee({
    name: 'John Doe',
    gender: GENDER.MALE,
    age: 20
  })
  
  assert.deepStrictEqual(employee.name, 'Mr. John Doe')
  assert.deepStrictEqual(employee.age, undefined)
  assert.deepStrictEqual(employee.gender, undefined)
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

  const expectedBirthYear = 2001;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

  // does not have the set method, it will not change !!!
  employee.birthYear = new Date().getFullYear() - 80
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

  // age has the set method
  employee.age =  80
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log('\n------ employee ------')
  console.log('employee.name', employee.name)
  console.log('employee.age', employee.age)
  console.log('employee.gender', employee.gender)
  console.log('employee.grossPay', employee.grossPay)
  console.log('employee.netPay', employee.netPay)
}

{
  const manager = new Manager({
    name: 'Mariah',
    age: 18,
    gender: GENDER.FEMALE
  })

  assert.deepStrictEqual(manager.name, 'Ms. Mariah')
  assert.deepStrictEqual(manager.age, undefined)
  assert.deepStrictEqual(manager.gender, undefined)
  assert.deepStrictEqual(manager.birthYear, 2003)
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32))

  console.log('\n------ manager ------')
  console.log('manager.name', manager.name)
  console.log('manager.age', manager.age)
  console.log('manager.gender', manager.gender)
  console.log('manager.bonuses', manager.bonuses)
  console.log('manager.grossPay', manager.grossPay)
  console.log('manager.netPay', manager.netPay)

}