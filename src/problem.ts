function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper == "undefined") {
    return input.toLocaleUpperCase();
  }
  return input.toLocaleLowerCase();
}





function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach((arr) => result.push(...arr));
  return result;
}




class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}




function processValue(value: string | number): number {
  if (typeof value == "number") {
    return value * 2;
  }
  return (value as string).length;
}





interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((maxSoFar, current) =>
    current.price > maxSoFar.price ? current : maxSoFar
  );
}





enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Sunday:
    case Day.Saturday:
      return "Weekend";
    default:
      return "Weekday";
  }
}





async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      return reject(new Error("Negative number not allowed"));
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
