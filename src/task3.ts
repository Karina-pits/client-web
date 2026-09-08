function calculateIceCreamCost(): void {
    const sizeInput = prompt(
        "Оберіть розмір морозива:\n1 - Маленький стаканчик (10 грн)\n2 - Великий стаканчик (25 грн)"
    );

    let totalCost = 0;

    if (sizeInput === "1") {
        totalCost += 10;
    } else if (sizeInput === "2") {
        totalCost += 25;
    } else {
        alert("Некоректний вибір розміру морозива!");
        return;
    }

    const toppingInput = prompt(
    "Оберіть одну або декілька начинок через кому (наприклад: 1,3):\n1 - Шоколад (+5 грн)\n2 - Карамель (+6 грн)\n3 - Ягоди (+10 грн)"
  );
  
  if (!toppingInput || toppingInput.trim() === "") {
    alert("Потрібно обрати принаймні одну начинку!");
    return;
  }

  const toppings = toppingInput.split(",").map((item) => item.trim());
  let hasValidTopping = false;

  for (const topping of toppings) {
    if (topping === "1") {
        totalCost += 5;
        hasValidTopping = true;
    } else if (topping === "2") {
        totalCost += 6;
        hasValidTopping = true;
    }else if (topping === "3") {
        totalCost += 10;
        hasValidTopping = true;
    }
  }

  if (!hasValidTopping) {
    alert("Ви не обрали жодної дійсної начинки!");
    return;
  }

  const marshmallowInput = prompt("Бажаєте додати маршмелоу (+5 грн)? (так/ні)");

  if (marshmallowInput && marshmallowInput.toLowerCase().trim() === "так") {
    totalCost += 5;
  }

  alert(`Загальна вартість вашого морозива: ${totalCost} грн`);
  console.log(`Загальна вартість морозива: ${totalCost} грн`);
}

calculateIceCreamCost();