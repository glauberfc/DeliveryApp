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
  readonly logo: string;
  readonly cover?: string;
  readonly category?: Category;
  readonly city?: City;
  readonly address: string;
  readonly zipCode: string;
  readonly whatsapp: string;
  readonly products?: Product[];
  readonly deliveryTax: number;
  readonly minDeliveryPrice: number;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class Product {
  readonly id: string;
  readonly companyCategoryId: string;
  readonly menuSection?: string;
  readonly company?: Company;
  readonly name: string;
  readonly description: string;
  readonly picture: string;
  readonly price: number;
  readonly isInPromotion: boolean;
  readonly promotionalPrice?: number;
  readonly promotionDueDate?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}