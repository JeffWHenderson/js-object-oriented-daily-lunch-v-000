let store = {customers: []}

let mealId = 0




class Customer {
  constructor(name) {
    this.name = name

    store.customers.push(this)
  }
}
