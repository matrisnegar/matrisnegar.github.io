import products from "@/data/products.json";import services from "@/data/services.json";import testimonials from "@/data/testimonials.json";import faq from "@/data/faq.json";import projects from "@/data/projects.json";
import type { Product,Testimonial } from "@/types";
export const getProducts=()=>products as Product[];
export const getProduct=(slug:string)=>(products as Product[]).find(p=>p.slug===slug);
export const getServices=()=>services;
export const getApprovedTestimonials=()=> (testimonials as Testimonial[]).filter(t=>t.approved);
export const getFaqs=()=>faq;
export const getProjects=()=>projects;
