import type { DemoRequest } from "@/types";
const KEY="matris_demo_requests";
export const demoRequestService={create:(data:Omit<DemoRequest,"id"|"createdAt">)=>{const item={...data,id:crypto.randomUUID(),createdAt:new Date().toISOString()};const list=JSON.parse(localStorage.getItem(KEY)||"[]");localStorage.setItem(KEY,JSON.stringify([...list,item]));return item;},getAll:():DemoRequest[]=>JSON.parse(localStorage.getItem(KEY)||"[]")};
