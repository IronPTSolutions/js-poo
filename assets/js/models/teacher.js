class Teacher extends User {

  constructor(name, lastName, age, skills) {
    super(name, lastName, age);
    this.skills = skills;
  }
  
  getFullName() {
    return `Profe: ${super.getFullName()}`
  }

  sign() {
    return `${this.name} - ${this.email}`
  }
} 