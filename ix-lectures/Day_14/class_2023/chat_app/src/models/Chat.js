export class Chat {
  constructor({ id, users }) {
    this.id = id;
    this.users = users;
  }

  toJson() {
    return {
      users: this.users,
    };
  }

  static fromFirebase(doc) {
    const data = doc.data();

    return new Chat({
      id: doc.id,
      users: data.users,
    });
  }
}
