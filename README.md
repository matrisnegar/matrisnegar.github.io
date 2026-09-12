# وب‌سایت داده نگار ماتریس

وب‌سایت رسمی فارسی، RTL و Responsive برای معرفی محصولات نرم‌افزاری داده نگار ماتریس. محتوا از کاتالوگ ارائه‌شده استخراج شده و موارد فاقد منبع معتبر عمداً خالی نگه داشته شده‌اند.

## فناوری و اجرا

React 19، TypeScript، Vinext/Next API روی Vite و Tailwind CSS 4. برای اجرا و ساخت:

```bash
npm ci
npm run dev
npm run build
```

خروجی استاتیک در `dist/client` ساخته می‌شود.

## معماری داده

محتوای قابل تغییر در پوشه `data` است: `products.json`، `services.json`، `testimonials.json`، `faq.json`، `projects.json`، `demo-requests.json`، `company.json` و `articles.json`.

برای نمایش نظر عمومی، رکورد را به `testimonials.json` اضافه و `approved` را `true` کنید. نظرهای فرم و درخواست‌های دمو در نسخه استاتیک فقط در LocalStorage ذخیره می‌شوند و به JSON یا GitHub نوشته نمی‌شوند.

## اتصال Backend

لایه سرویس در پوشه `services` شامل `productService.ts`، `testimonialService.ts` و `demoRequestService.ts` است. برای اتصال REST API، Firebase یا Supabase، متدهای همین سرویس‌ها را جایگزین کنید. در نسخه واقعی اعتبارسنجی سمت سرور، ضداسپم و مدیریت تأیید نظرات را اضافه کنید.

## انتشار در GitHub Pages

Workflow در `.github/workflows/deploy-pages.yml` با Push به `main` اجرا می‌شود. در Repository، از مسیر **Settings → Pages → Source** گزینه **GitHub Actions** را انتخاب کنید.

این نسخه برای انتشار در ریشه دامنه تنظیم شده است. برای GitHub Pages، نام مخزن را به شکل `<username>.github.io` انتخاب کنید یا دامنه سفارشی شرکت را به Pages متصل کنید؛ در این حالت مسیرها و Canonical بدون Base Path اضافه کار می‌کنند.

## SEO و محتوا

Canonical فعلی `https://www.matrisnegar.ir` است. برای دامنه جدید، `metadataBase` در `app/layout.tsx` و آدرس‌های `app/sitemap.ts` و `app/robots.ts` را عوض کنید.

دو نشانی و چند شماره تماس متفاوت در کاتالوگ دیده شد و هر دو با هشدار نیاز به تأیید نمایش داده شده‌اند. آمار شرکت، مشتریان، پروژه‌ها و Testimonials در منابع موجود نبود و داده ساختگی اضافه نشده است. مشخصه SQL Server 2008 نیز عیناً از کاتالوگ آمده و باید برای نسخه جاری استعلام شود.
