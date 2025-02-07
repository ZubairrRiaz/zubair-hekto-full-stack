import { type SchemaTypeDefinition } from 'sanity'
import { LandingPage } from './LandingPage'
import { productsData } from './productsData'
import { customerDetails } from './customerDetails'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [LandingPage,productsData,customerDetails],
}
