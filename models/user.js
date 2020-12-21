class User {
  constructor(id, firstname, lastname) {
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
  }

  getFullname() {
    return `${firstname} ${lastname}`
  }

  getId() {
    return `this guy id is ${this.id}`
  }
}

export default User