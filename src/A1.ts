{
  // 

  // Problem 1:
  function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  const result1 = formatString('Hello')
  const result2 = formatString('Hello', true)
  const result3 = formatString('Hello', false)

  console.log(result1, result2, result3);


  
  // Problem 2:
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(items => items.rating >= 4)
  };

  const filteredBooks = filterByRating(books)
  console.log(filteredBooks);


  // Problem 3:
  const result4 = concatenateArrays(["a", "b"], ["c"]);
  const result5 = concatenateArrays([1, 2], [3, 4], [5]);

  function concatenateArrays<T>(...arrays: T[][]): T[]{
    return ([] as T[]).concat(...arrays)
  };

  console.log(result4);
  console.log(result5);


  // Problem 4:
  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
      this.make = make;
      this.year = year;
    };

    getInfo(): string{
      return `Make: ${this.make}, Year: ${this.year}`
    };
  };

  class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number, model: string){
      super(make, year);
      this.model = model;
    };

    getModel(): string{
      return `Model: ${this.model}`
    };
  };

  const myCar = new Car('Toyota', 2020, 'Corolla');
  console.log(myCar.getInfo());
  console.log(myCar.getModel());


  // Problem 5:
  function processValue(value: string | number): number {
    if(typeof value === 'string'){
      return value.length;
    }else{
      return value *2
    };
  };

  const result6 = processValue('Hello');
  const result7 = processValue(10);

  console.log(result6, result7);


  // Problem 6:
  const products = [
    { name: 'Pen', price: 10 },
    { name: 'Notebook', price: 25 },
    { name: 'Bag', price: 50 },
  ];

  interface Products {
    name: string;
    price: number;
  };

  function getMostExpensiveProduct(products: Products[]): Products | null {
    if(products.length === 0){
      return null
    }else{
      return products.reduce((maxProduct, currentProduct) => currentProduct.price > maxProduct.price ? currentProduct : maxProduct)
    };
  };

  const highestPriceProduct = getMostExpensiveProduct(products);

  console.log(highestPriceProduct);


  // Problem 7:
  enum Day {
    Monday, TuesDay, Wednesday, Thursday, Friday, Saturday, Sunday
  };

  function getDayType(day: Day): string{
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return 'Weekend';
        default: return 'Weekday'
    }
  };

  console.log(getDayType(Day.Monday));
  console.log(getDayType(Day.Saturday));


  // Problem 8:
  async function squareAsync(num: number) : Promise<number> {
    if(num < 0){
      throw new Error('Negative number no allowed');
    }else{
      return new Promise((resolve) => {
        setTimeout(() => resolve(num * num), 1000)
      })
    } ;
  };
  
  squareAsync(4)
  .then((result8) => console.log(result8))
  .catch((error) => console.log(error))


  // 
}