import { type SchemaTypeDefinition } from 'sanity'
import { LandingPage } from './LandingPage'
import { productsData } from './productsData'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [LandingPage,productsData],
}
