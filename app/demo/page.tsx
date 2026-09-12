import type {Metadata} from "next";import {PageHero} from "@/components/page-hero";import {DemoForm} from "@/components/demo-form";
export const metadata:Metadata={title:"درخواست دمو",description:"ثبت درخواست نمایش محصولات داده نگار ماتریس"};
export default function Demo(){return <main id="main"><PageHero kicker="درخواست دمو" title="محصول را در بستر نیاز واقعی خود ببینید" description="اطلاعات تماس و محصول موردنظر را ثبت کنید. این نسخه استاتیک، داده را فقط در مرورگر شما نگه می‌دارد."/><section className="section-pad"><div className="container narrow"><DemoForm/></div></section></main>}
