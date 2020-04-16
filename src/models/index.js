// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, City, Company, Product } = initSchema(schema);

export {
  Category,
  City,
  Company,
  Product
};