class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const cam = new Person('Cameron', 'Kirkpatrick', '23/11/1993');

console.log(cam);
console.log(cam.getFullName());

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership) {
    // when we instantiate a customer we want to call the person constructor
    super(firstName, lastName, dob);

    this.phone = phone;
    this.membership = membership;
  }
  // static not available on an instance
  static getMembershipCost() {
    return 500;
  }

  // We can add non-static methods here as well that are available on the instance
  getMembershipType() {
    return this.membership;
  }
}

// Only available on the Object Class
console.log(Customer.getMembershipCost());

const john = new Customer('John', 'Doe', '23/11/1993', '011 425 6536', 'Premium');

console.log(john);
console.log(john.getFullName());
console.log(john.getMembershipType());

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {
    this.form = document.getElementById('form');

    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.isbn = document.getElementById('isbn');

    this.tableBody = document.getElementById('table-body');

    this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

    this.books = [];
    this.renderTable();
  }

  onFormSubmit(e) {
    e.preventDefault();

    const book = new Book(this.title.value, this.author.value, this.isbn.value);

    this.books.push(book);

    this.renderTable();
  }

  renderTable() {
    this.tableBody.innerHTML = [];

    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];

      const tr = document.createElement('tr');

      const tdTitle = document.createElement('td');
      const tdAuthor = document.createElement('td');
      const tdIsbn = document.createElement('td');
      const tdAction = document.createElement('td');

      tdTitle.innerHTML = book.title;
      tdAuthor.innerHTML = book.author;
      tdIsbn.innerHTML = book.isbn;
      tdAction.innerHTML = 'x';

      tr.appendChild(tdTitle);
      tr.appendChild(tdAuthor);
      tr.appendChild(tdIsbn);
      tr.appendChild(tdAction);

      this.tableBody.appendChild(tr);
    }
  }
}

const ui = new UI();
