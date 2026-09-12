import type {Metadata} from "next";import {PageHero} from "@/components/page-hero";import {FaqList} from "@/components/faq-list";import {getFaqs} from "@/services";
export const metadata:Metadata={title:"پرسش‌های متداول",description:"پاسخ به پرسش‌های متداول درباره محصولات ماتریس"};
export default function Faq(){return <main id="main"><PageHero kicker="FAQ" title="پرسش‌های متداول" description="پاسخ‌ها فقط بر پایه اطلاعات کاتالوگ و معماری نسخه فعلی سایت ارائه شده‌اند."/><section className="section-pad"><div className="container narrow"><FaqList items={getFaqs()}/></div></section></main>}
