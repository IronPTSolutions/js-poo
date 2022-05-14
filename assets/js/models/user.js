class User {

  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = `${this.name}@example.org`.toLocaleLowerCase();
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

}
