export type Product={id:number;slug:string;name:string;shortDescription:string;description:string;image:string;category:string;applications:string[];industries:string[];features:string[];benefits:string[];technical:string[];screenshots:string[]};
export type Testimonial={id:number;name:string;position:string;company:string;text:string;rating:number;image:string;approved:boolean;email?:string};
export type DemoRequest={id:string;fullName:string;company:string;email:string;phone:string;product:string;preferredTime:string;notes:string;contactMethod:string;createdAt:string};
