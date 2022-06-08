

const phoneBook = [
  { name: "Jacques", number: "123456789" },
  { name: "Michelle", number: "987654321" },
];


function printPhoneBook() {
  let output = '<ol>';

  for (let i = 0; i < phoneBook.length; i++) {
    let contact = phoneBook[i];
    output += '<li>' + contact.name + ' - ' + contact.number + '</li>';
  }

  output += '</ol>';
  document.body.innerHTML = output;
}

function saveContact(contact) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      phoneBook.push(contact);
      resolve();
      // reject('nope')
    }, 3000);

  });
}

// savContact({
//   name: 'Cameron',
//   number: '0987654321'
// }).then(() => {
//   printPhoneBook()
// }).catch(err => {
//   alert(err);
// });

async function start() {
  try {
    await saveContact({ name: 'Cameron', number: '0987654321' });

    await saveContact({ name: 'John', number: '0987654321' });
    await saveContact({ name: 'Jane', number: '0987654321' });

    printPhoneBook();
  } catch(err) {
    alert(err);
  }
}

start();