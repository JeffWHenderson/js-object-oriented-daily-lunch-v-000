let store = {customers: [], employers: []}

let mealId = 0
let customerId = 0
let employerId = 0


class Customer {
  constructor(name) {
    this.id = ++customerId
    this.name = name

    store.customers.push(this)
  }
}

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name

    store.customers.push(this)
  }
}
