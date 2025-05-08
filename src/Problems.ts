
function formatString(input: string, toUpper?: boolean): string{
    if(toUpper||toUpper==undefined){
       
        return input.toUpperCase();
    }
    
    else{
        return input.toLocaleLowerCase();
    }

}
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter((item)=>item.rating>=4);
  }


  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((mergedArray, nextArray) => mergedArray.concat(nextArray), []);
}

class Vehicle {
    private make: string;
    private year: string;

    constructor(make: string, year: string) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: string, model: string) {
    
        super(make, year);
        this.model = model;
    }


    getModel(): string {
        return `Model: ${this.model}`;
    }
}


const myCar = new Car("Toyota", "2020", "Corolla");

function processValue(value: string | number): number{
    if (typeof value === "string") {
        return value.length; 
    } else {
        return value * 2; 
    }
}
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((mostExpensiveProduct, currentProduct) => {
        return currentProduct.price > mostExpensiveProduct.price ? currentProduct : mostExpensiveProduct;
    });
}
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
      if (day === Day.Saturday || day === Day.Sunday) {
          return "Weekend";
      } else {
          return "Weekday";
      }
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject("Error: Negative number not allowed");
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

