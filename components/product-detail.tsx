import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProduct } from "@/services";

type ProductDetailProps = {
  slug: string;
};

export function ProductDetail({ slug }: ProductDetailProps) {
  const product = getProduct(slug);

  if (!product) {
    return (
      <main id="main" className="not-found">
        <h1>محصول پیدا نشد</h1>
        <a className="btn primary" href="/products">
          بازگشت به محصولات
        </a>
      </main>
    );
  }

  return (
    <main id="main">
      <section className="product-hero">
        <div className="container product-hero-grid">
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="actions">
              <a
                className="btn primary"
                href={`/demo?product=${product.slug}`}
              >
                درخواست دمو
                <ArrowLeft size={18} aria-hidden="true" />
              </a>

              <a className="btn ghost" href="/contact">
                تماس با ما
              </a>
            </div>
          </div>

          <div className="detail-image">
            <Image
              src={product.image}
              fill
              alt={`صفحه کاتالوگ ${product.name}`}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container detail-grid">
          <article>
            <h2>امکانات و قابلیت‌ها</h2>

            <div className="feature-list">
              {product.features.map((feature) => (
                <div key={feature}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </article>

          <aside>
            <h2>حوزه کاربرد</h2>

            <div className="tag-list">
              {product.applications.map((application) => (
                <span key={application}>{application}</span>
              ))}
            </div>

            <h2>صنایع هدف</h2>

            <div className="tag-list">
              {product.industries.map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad soft">
        <div className="container">
          <h2>مزایا</h2>

          <div className="service-grid">
            {product.benefits.map((benefit, index) => (
              <article className="service-card" key={benefit}>
                <span>{String(index + 1).padStart(2, "۰")}</span>
                <h3>{benefit}</h3>
              </article>
            ))}
          </div>

          {product.technical.length > 0 && (
            <>
              <h2 className="mt">
                مشخصات فنی ذکرشده در کاتالوگ
              </h2>

              <ul className="tech-list">
                {product.technical.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="container narrow">
          <h2>پرسش‌های محصول</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3>آیا این محصول قابل دمو است؟</h3>
              <p>
                برای بررسی نسخه، ماژول‌ها و شرایط استقرار، فرم
                دمو را تکمیل کنید.
              </p>
            </div>

            <div className="faq-item">
              <h3>آیا همه قابلیت‌ها در هر استقرار فعال‌اند؟</h3>
              <p>
                کاتالوگ فهرست قابلیت‌ها را ارائه می‌کند؛ محدوده
                دقیق هر استقرار باید با شرکت تأیید شود.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
