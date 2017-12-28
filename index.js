let store = { customers: [], employers: [], meals: [] }

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

    store.employers.push(this)
  }
}

class Meal {
  constructor(name) {
    this.id = ++mealId
    this.name = name

    store.meals.push(this)
  }
}
