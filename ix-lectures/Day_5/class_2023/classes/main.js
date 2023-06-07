// Classes

class Person {
  constructor(firstName, lastName, age, address, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  fullName() {
    return `Full name: ${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    return `Good day ${this.firstName} ${this.lastName}`;
  }

  addTwoNumbers(x, y) {
    return `Result: ${x + y}`;
  }
}

const cam = new Person(
  'Cameron',
  'Kirkpatrick',
  29,
  '6th Fourteenth Street',
  '0635776444'
);

console.log(cam);
console.log(cam.sayHello());
console.log(cam.addTwoNumbers(10, 5));

// Inheritance

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    address,
    phoneNumber,
    dob,
    membershipType
  ) {
    // when we instantiate a Customer we want to call the Person constructor
    super(firstName, lastName, age, address, phoneNumber);

    this.dob = dob;
    this.membershipType = membershipType;
  }

  // static functions not available on an instance
  // something that applies to all instances
  // in this case all memberships cost 500
  static getMembershipCost() {
    let cost = 500;
    return `Membership costs: ${cost}`;
  }

  // We can add non-static methods here as well that are available on the instance
  getMembershipType() {
    return `${this.membershipType} membership`;
  }
}

// Only available on the Object Class
console.log(Customer.getMembershipCost());

const jamie = new Customer(
  'Jamie',
  'Finnigen',
  29,
  '15 Fifth Street',
  '0873456635',
  '23/11/1993',
  'Premium'
);

console.log(jamie);
console.log(jamie.fullName());
console.log(jamie.sayHello());
console.log(jamie.getMembershipType());

const gertrude = new Customer(
  'Gertrude',
  'Von Blaushwictz',
  77,
  '88 Holy Avenue',
  '0735663777',
  '02/03/1932',
  'Medallion'
);

console.log(gertrude);
console.log(gertrude.fullName());
console.log(gertrude.sayHello());
console.log(gertrude.getMembershipType());

let customers = [];
customers.push(jamie);
customers.push(gertrude);

class UI {
  constructor() {
    this.tableBody = document.getElementById('table-body');
  }

  renderCustomers() {
    this.tableBody.innerHTML = [];

    for (let i = 0; i < customers.length; i++) {
      const tr = document.createElement('tr');

      let firstName = document.createElement('td');
      let lastName = document.createElement('td');
      let age = document.createElement('td');
      let address = document.createElement('td');
      let phoneNumber = document.createElement('td');
      let dob = document.createElement('td');
      let membershipType = document.createElement('td');

      firstName.innerHTML = customers[i].firstName;
      lastName.innerHTML = customers[i].lastName;
      age.innerHTML = customers[i].age;
      address.innerHTML = customers[i].address;
      phoneNumber.innerHTML = customers[i].phoneNumber;
      dob.innerHTML = customers[i].dob;
      membershipType.innerHTML = customers[i].membershipType;

      tr.appendChild(firstName);
      tr.appendChild(lastName);
      tr.appendChild(age);
      tr.appendChild(address);
      tr.appendChild(phoneNumber);
      tr.appendChild(dob);
      tr.appendChild(membershipType);

      this.tableBody.appendChild(tr);
    }
  }
}

const ui = new UI();
ui.renderCustomers();
