let store = { deliveries: [], customers: [], employers: [], meals: [] }

let mealId = 0
let customerId = 0
let employerId = 0
let deliveryId = 0

    class Delivery {
      constructor(meal = {}, customer = {}) {
        this.id = ++deliveryId
        this.mealId = meal.id
        this.customerId = customer.id

        store.deliveries.push(this)
      }

      customer() {
        // return store.customers.find(function(customerId){
        //   console.log(store.customers.customer['id'] === 5)// === customerId
        // })
        console.log(store.customers[2] === 5)
      }
    }

class Customer {
  constructor(name) {
    this.id = ++customerId
    this.name = name

    store.customers.push(this)
  }

  totalSpent() {
    console.log(store.customers)
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

  static byPrice() {
    return store.meals.sort(function(meal1, meal2){
      return meal1.price < meal2.price
    })
  }
}
