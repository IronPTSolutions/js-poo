const user = new User('Carlos', 'del Prado', 32);
console.log(user);
console.log(user.getFullName());
console.log(user.email);


const teacher = new Teacher('Julio', 'García', 28, ['js', 'ppt']);
console.log(teacher);
console.log(teacher.getFullName());
console.log(teacher.email);
console.log(teacher.sign());