import products from "@/data/products.json";
import type { Product } from "@/types";
export const productService={getAll:()=>products as Product[],getBySlug:(slug:string)=>(products as Product[]).find(p=>p.slug===slug)};
