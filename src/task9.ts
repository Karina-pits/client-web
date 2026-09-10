
interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
}

class Book implements LibraryItem {
  public title: string;
  public author: string;
  public pageCount: number;
  public isBorrowed: boolean = false;

  constructor(title: string, author: string, pageCount: number) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
  }

  public borrow(): void {
    if (this.isBorrowed) {
      console.log(`Книга "${this.title}" вже позичена.`);
    } else {
      this.isBorrowed = true;
      console.log(`Ви успішно позичили книгу "${this.title}" (${this.pageCount} стор.).`);
    }
  }
}

class Magazine implements LibraryItem {
  public title: string;
  public author: string;
  public issueNumber: number;
  public isBorrowed: boolean = false;

  constructor(title: string, author: string, issueNumber: number) {
    this.title = title;
    this.author = author;
    this.issueNumber = issueNumber;
  }

  public borrow(): void {
    if (this.isBorrowed) {
      console.log(`Журнал "${this.title}" (Випуск №${this.issueNumber}) вже позичено.`);
    } else {
      this.isBorrowed = true;
      console.log(`Ви позичили журнал "${this.title}" (Випуск №${this.issueNumber}).`);
    }
  }
}

class DVD implements LibraryItem {
  public title: string;
  public author: string;
  public durationMinutes: number;
  public isBorrowed: boolean = false;

  constructor(title: string, author: string, durationMinutes: number) {
    this.title = title;
    this.author = author;
    this.durationMinutes = durationMinutes;
  }

  public borrow(): void {
    if (this.isBorrowed) {
      console.log(`DVD "${this.title}" вже позичено.`);
    } else {
      this.isBorrowed = true;
      console.log(`Ви позичили DVD "${this.title}" (Тривалість: ${this.durationMinutes} хв).`);
    }
  }
}

class Library {
  private items: LibraryItem[] = [];

  public addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log(`Додано до бібліотеки: "${item.title}"`);
  }

  public findItemByName(name: string): LibraryItem | undefined {
    return this.items.find((item) => item.title.toLowerCase() === name.toLowerCase());
  }

  public printAvailableItems(): void {
    console.log("\n Доступні елементи в бібліотеці");
    const availableItems = this.items.filter((item) => !item.isBorrowed);

    if (availableItems.length === 0) {
      console.log("Усі елементи наразі позичені.");
    } else {
      availableItems.forEach((item) => {
        console.log(`- ${item.title} (Автор/Режисер: ${item.author})`);
      });
    }
  }
}

const library = new Library();

const book1 = new Book("Кобзар", "Тарас Шевченко", 350);
const magazine1 = new Magazine("National Geographic", "Редакція NG", 2024);
const dvd1 = new DVD("Інтерстеллар", "Крістофер Нолан", 169);

console.log(" Додавання матеріалів");
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

library.printAvailableItems();

console.log("\n Операції позичення");
const foundBook = library.findItemByName("Кобзар");
if (foundBook) {
  foundBook.borrow();
}

book1.borrow();

dvd1.borrow();

library.printAvailableItems();