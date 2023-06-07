// Asynchronous JavaScript

console.log('1');

setTimeout(() => {
  console.log('2');
}, 2000);

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

getPhoneNumbers();

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

      // toggle err to see the resolve and reject cases
      // const err = true;
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

async function start() {
  try {
    await saveContact({ name: 'Cam', number: '08366585' });
    getPhoneNumbers();
    console.log('Contact Added!');
  } catch (err) {
    console.log(err);
  }
}

start();
