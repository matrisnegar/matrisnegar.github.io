import company from "@/data/company.json";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">M</span>

            <span>
              <b>{company.name}</b>
              <small>نرم‌افزارهای راهبردی مالی و اداری</small>
            </span>
          </div>

          <p>معرفی محصولات بر پایه کاتالوگ رسمی شرکت.</p>
        </div>

        <div>
          <h3>دسترسی سریع</h3>
          <a href="/products">محصولات</a>
          <a href="/services">خدمات</a>
          <a href="/demo">درخواست دمو</a>
          <a href="/testimonials">ارسال نظر</a>
        </div>

        <div>
          <h3>اطلاعات</h3>
          <a href="/about">درباره شرکت</a>
          <a href="/faq">پرسش‌های متداول</a>
          <a href="/privacy">حریم خصوصی</a>
          <a href="/terms">شرایط استفاده</a>
        </div>

        <div>
          <h3>تماس</h3>

          <a href="tel:+982166086682" dir="ltr">
           021-91301556
          </a>

          <a
            href={`https://${company.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.website}
          </a>

          <p className="muted">
            تهران — نشانی کامل در صفحه تماس
          </p>
        </div>
      </div>

      <div className="container copyright">
        <span>
          © {new Date().getFullYear()} داده نگار ماتریس
        </span>
        <span>تمام حقوق محفوظ است.</span>
      </div>
    </footer>
  );
}
