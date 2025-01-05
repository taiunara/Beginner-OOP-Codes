class Person {
  #cpf;

  constructor(name, age, cpf) {
    this.name = name;
    this.age = age;
    this.#cpf = cpf;
  }

  get CPF() {
    return "*".repeat(this.#cpf.length);
  }

  set CPF(newCpf) {
    if (newCpf.length < 6) {
      console.log("INVALID! It must have at least 6 characters.");
    } else {
      this.#cpf = newCpf;
      console.log(`CPF updated to ${this.#cpf}`);
    }
  }

  viewPersonDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`CPF: ${this.CPF}`);
  }
}

class Customer extends Person {
  constructor(name, age, cpf, balance) {
    super(name, age, cpf);
    this.balance = balance;
  }

  viewPersonDetails() {
    super.viewPersonDetails();
    console.log(`Balance: $${this.balance}`);
  }

  makePayment(movie) {
    if (this.balance < movie.rentalPrice) {
      console.log("ERROR! Insufficient balance.");
    } else {
      this.balance -= movie.rentalPrice;
      console.log(`Movie rented! Your current balance is $${this.balance}`);
    }
  }
}

class Employee extends Person {
  constructor(name, age, cpf, position) {
    super(name, age, cpf);
    this.position = position;
  }

  assistCustomer(customer, movie, store) {
    if (customer.balance < movie.rentalPrice) {
      console.log(`Hello Mr./Ms. ${customer.name}, you don't have enough balance to rent this movie.`);
    } else {
      console.log(
        `Hello Mr./Ms. ${customer.name}, your balance is $${customer.balance}. Proceed with payment for the movie "${movie.title}".`
      );
      customer.makePayment(movie);
      store.addRevenue(movie.rentalPrice);
    }
  }
}

class Movie {
  constructor(title, genre, rentalPrice) {
    this.title = title;
    this.genre = genre;
    this.rentalPrice = rentalPrice;
  }

  viewDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Rental Price: $${this.rentalPrice}`);
  }
}

class VideoStore {
  constructor() {
    this.customers = [];
    this.movies = [];
    this.employees = [];
    this.totalRevenue = 0;
  }

  addCustomer(newCustomer) {
    this.customers.push(newCustomer);
    console.log(`Customer ${newCustomer.name} has been added to the system and can now rent movies.`);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
      console.log(`Customer ${customer.name} has been removed.`);
    } else {
      console.log("Customer not found.");
    }
  }

  addMovie(newMovie) {
    this.movies.push(newMovie);
    console.log(`Movie "${newMovie.title}" has been added to the system.`);
  }

  removeMovie(movie) {
    const index = this.movies.indexOf(movie);
    if (index !== -1) {
      this.movies.splice(index, 1);
      console.log(`Movie "${movie.title}" has been removed from the system.`);
    } else {
      console.log("Movie not found.");
    }
  }

  addEmployee(newEmployee) {
    this.employees.push(newEmployee);
    console.log(`Employee ${newEmployee.name} has been added to the system.`);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
      console.log(`Employee ${employee.name} has been removed from the system.`);
    } else {
      console.log("Employee not found.");
    }
  }

  addRevenue(amount) {
    this.totalRevenue += amount;
  }

  calculateTotalRevenue() {
    console.log(`Today's total revenue is: $${this.totalRevenue}`);
  }
}

// Sample usage
const customer1 = new Customer("Marcos", 26, "547896", 25);
const customer2 = new Customer("Ana", 30, "123456", 50);

const movie1 = new Movie("Coraline", "Animation/Horror", 25);
const movie2 = new Movie("Titanic", "Romance", 15);

const maria = new Employee("Maria", 29, "456789", "Manager");

const videoStore = new VideoStore();

maria.assistCustomer(customer1, movie1, videoStore);
maria.assistCustomer(customer2, movie2, videoStore);

videoStore.calculateTotalRevenue();
