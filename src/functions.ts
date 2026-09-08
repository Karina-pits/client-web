function greetUser(name: string, repeatCount: number = 1): void {
    for (let i = 0; i < repeatCount; i++) {
        console.log(`Привіт, ${name}!`);
    }
}

greetUser("Каріна");
greetUser("Анна");