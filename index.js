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
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price

    store.meals.push(this)
  }
}
class Delivery {
  constructor(meal, customer) {
    this.meal = meal
    this.customer = customer
  }
}
