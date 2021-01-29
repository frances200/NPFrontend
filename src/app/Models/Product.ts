export class Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageurl: string;
  id: number;

  constructor(id: number, name: string, description: string, price: number, stock: number, imageurl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.imageurl = imageurl;
  }
}
