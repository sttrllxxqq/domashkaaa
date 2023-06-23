class Student {
  constructor(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(undefined);
  }
  
  getAge() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
  }
  
  getAverageGrade() {
  if (this.grades.length === 0) {
  return 0;
  }
  const sum = this.grades.reduce((a, b) => a + b);
  return sum / this.grades.length;
  }
  
  present() {
  if (this.attendance.includes(undefined)) {
  const emptyIndex = this.attendance.indexOf(undefined);
  this.attendance[emptyIndex] = true;
  }
  }
  
  absent() {
  if (this.attendance.includes(undefined)) {
  const emptyIndex = this.attendance.indexOf(undefined);
  this.attendance[emptyIndex] = false;
  }
  }
  
  summary() {
  const averageGrade = this.getAverageGrade();
  const attendancePercentage = this.attendance.filter(a => a === true).length / this.attendance.length;
  
  if (averageGrade > 90 && attendancePercentage > 0.9) {
    return "Молодець!";
  } else if (averageGrade > 90 || attendancePercentage > 0.9) {
    return "Добре, але можна краще";
  } else {
    return "Редиска!";
  }
  }
  }
  
  const student1 = new Student("Іван", "Петров", 2000);
  const student2 = new Student("Олена", "Сидорова", 1999);
  const student3 = new Student("Микола", "Іванов", 2001);
  
  student1.present();
  student1.present();
  student1.absent();
  console.log(student1.summary()); 
  
  student2.present();
  student2.present();
  student2.present();
  console.log(student2.summary()); 
  
  student3.present();
  student3.present();
  student3.present();
  student3.present();
  student3.absent();
  student3.present();
  console.log(student3.summary()); 