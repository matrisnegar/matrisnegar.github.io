import initial from "@/data/testimonials.json";
import type { Testimonial } from "@/types";
const KEY="matris_testimonials";
export const testimonialService={getApproved:()=>((initial as Testimonial[]).filter(x=>x.approved)),submit:(data:Omit<Testimonial,"id"|"approved"|"image">)=>{const item={...data,id:Date.now(),approved:false,image:""};const list=JSON.parse(localStorage.getItem(KEY)||"[]");localStorage.setItem(KEY,JSON.stringify([...list,item]));return item;}};
