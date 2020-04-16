import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class City {
  readonly id: string;
  readonly name: string;
  readonly uf: string;
  constructor(init: ModelInit<City>);
  static copyOf(source: City, mutator: (draft: MutableModel<City>) => MutableModel<City> | void): City;
}

export declare class Company {
  readonly id: string;
  readonly _cityId: string;
  readonly _categoryId: string;
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly category?: Category;
  readonly city?: City;
  readonly products?: Product[];
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class Product {
  readonly id: string;
  readonly company?: Company;
  readonly name: string;
  readonly isInPromotion: boolean;
  readonly price: number;
  readonly promotionalPrice: number;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}