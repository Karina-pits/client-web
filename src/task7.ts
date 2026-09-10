interface Payable {
  pay(): void;
}


abstract class Employee {
  protected name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.10;
  }

  pay(): void {
    console.log(`Виплачено зарплату розробнику ${this.name}: ${this.salary} грн`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.20;
  }

  pay(): void {
    console.log(`Виплачено зарплату менеджеру ${this.name}: ${this.salary} грн`);
  }
}

const employees: Employee[] = [
  new Developer("Олександр", 25, 60000),
  new Developer("Каріна", 21, 75000),
  new Manager("Марія", 35, 90000),
  new Manager("Дмитро", 40, 110000)
];

employees.forEach((emp) => {
  if ("pay" in emp) {
    (emp as unknown as Payable).pay();
  }
});

const totalBonuses = employees.reduce(
  (sum, emp) => sum + emp.getAnnualBonus(),
  0
);

console.log(`Загальна річна сума бонусів для всіх співробітників: ${totalBonuses} грн`);