
abstract class Car {
  protected brand: string;
  protected model: string;
  protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  public abstract getDescription(): void;
}


class BmwCar extends Car {
  
  private MPackage: boolean;

  constructor(model: string, year: number, MPackage: boolean) {
    super("BMW", model, year);
    this.MPackage = MPackage;
  }

  public getDescription(): void {
    const hasM = this.MPackage ? "так" : "ні";
    console.log(
      `[BMW] Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, M-пакет: ${hasM}`
    );
  }
}


class TeslaCar extends Car {
  private batteryCapacity: number; 
  constructor(model: string, year: number, batteryCapacity: number) {
    super("Tesla", model, year);
    this.batteryCapacity = batteryCapacity;
  }

  public getDescription(): void {
    console.log(
      `[Tesla] Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Батарея: ${this.batteryCapacity} кВт·год`
    );
  }
}


class AudiCar extends Car {
  private isQuattro: boolean; 

  constructor(model: string, year: number, isQuattro: boolean) {
    super("Audi", model, year);
    this.isQuattro = isQuattro;
  }

  public getDescription(): void {
    const driveType = this.isQuattro ? "Quattro (повний)" : "Передній";
    console.log(
      `[Audi] Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Привід: ${driveType}`
    );
  }
}


const bmwM3 = new BmwCar("M3", 2023, true);
const bmwX5 = new BmwCar("X5", 2021, false);

const teslaModelS = new TeslaCar("Model S", 2022, 100);
const teslaModel3 = new TeslaCar("Model 3", 2024, 75);

const audiA6 = new AudiCar("A6", 2020, true);
const audiQ7 = new AudiCar("Q7", 2023, true);


console.log("Інформація про автомобілі");
bmwM3.getDescription();
bmwX5.getDescription();

teslaModelS.getDescription();
teslaModel3.getDescription();

audiA6.getDescription();
audiQ7.getDescription();