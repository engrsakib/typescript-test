function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper == "undefined") {
    return input.toLocaleUpperCase();
  }
  return input.toLocaleLowerCase();
}

console.log(formatString("sakib", false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const items = [
  { title: "Item A", rating: 3.5 },
  { title: "Item B", rating: 4.2 },
  { title: "Item C", rating: 4.0 },
  { title: "Item D", rating: 3.9 },
  { title: "sakib", rating: 4.9 },
];

console.log(filterByRating(items));


  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    arrays.forEach(arr => result.push(...arr));
    return result;
  }

  console.log(concatenateArrays(["a", "b"],["c"],["d"], ["sakib"]));
  console.log(concatenateArrays([0, 4, 24],[41],[5, 8], [4]));




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

const myCar = new Car("Honda", 2024, "Dream 110");
console.log(myCar.getInfo());
console.log(myCar.getModel());




function processValue(value: string | number): number {
  if (typeof value == "number") {
    return value * 2;
  }
  return (value as string).length;
}

console.log(processValue("programming-hero"));
console.log(processValue(10));


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
  
  const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  console.log(getMostExpensiveProduct(products));  



  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
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
  
  
  console.log(getDayType(Day.Monday));    
  console.log(getDayType(Day.Wednesday));    
  console.log(getDayType(Day.Friday));    
  console.log(getDayType(Day.Saturday));  
  console.log(getDayType(Day.Sunday)); 



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
  
  
  squareAsync(4)
    .then(result => console.log(result))  
    .catch(err => console.error(err));
  
  squareAsync(-3)
    .then(result => console.log(result))
    .catch(err => console.error(err));     