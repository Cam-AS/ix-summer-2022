// Asynchronous JavaScript

console.log('1');

setTimeout(() => {
  console.log('2');
}, 1000);

console.log('3');

// Callbacks (old)

const phoneBook = [
  { name: 'James', number: '098756475' },
  { name: 'Daniel', number: '384756938' },
];

function getPhoneNumbers() {
  setTimeout(() => {
    let output = '<ol>';

    for (let i = 0; i < phoneBook.length; i++) {
      let contact = phoneBook[i];
      output += '<li>' + contact.name + ' ' + contact.number + '</li>';
    }

    output += '</ol>';
    document.body.innerHTML = output;
  }, 1000);
}

// function saveContact(contact, callback) {
//   setTimeout(() => {
//     phoneBook.push(contact);

//     alert('Contact Added');

//     callback();
//   }, 3000);
// }

// saveContact({ name: 'Cam', number: '08366585' }, getPhoneNumbers);

// Promises (old)

function saveContact(contact) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      phoneBook.push(contact);

      const err = false;

      if (!err) {
        console.log('Success!');
        resolve();
      } else {
        reject('Err: Something went wrong!');
      }
    }, 3000);
  });
}

// saveContact({ name: 'Cam', number: '08366585' })
//   .then(getPhoneNumbers)
//   .catch((err) => console.log(err));

// async await (new)

// async function init() {
//   await saveContact({ name: 'Cam', number: '08366585' });
//   getPhoneNumbers();
// }

// init();

// Fetch API (Built in HTTP methods)

const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchDataPromise = fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}).then((res) => res.json());

async function init() {
  // fetch return a Promise we need a .then to resolve the Promise
  await fetchDataPromise.then((values) => console.log(values));
}

init();
