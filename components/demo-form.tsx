"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { demoRequestService } from "@/services/demoRequestService";
import products from "@/data/products.json";

export function DemoForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const f = new FormData(form);

    try {
      await demoRequestService.create({
        fullName: String(f.get("fullName") || ""),
        company: String(f.get("company") || ""),
        email: String(f.get("email") || ""),
        phone: String(f.get("phone") || ""),
        product: String(f.get("product") || ""),
        preferredTime: String(f.get("preferredTime") || ""),
        notes: String(f.get("notes") || ""),
        contactMethod: String(f.get("contactMethod") || ""),
      });

      form.reset();
      setSent(true);
    } catch (err) {
      console.error("Demo request error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="success">
        <CheckCircle2 />

        <h3>درخواست شما ثبت شد.</h3>

        <p>
          اطلاعات درخواست شما با موفقیت ثبت شد و کارشناسان ما با شما تماس
          خواهند گرفت.
        </p>

        <button
          className="btn ghost"
          onClick={() => {
            setSent(false);
            setError(false);
          }}
        >
          ثبت درخواست دیگر
        </button>
      </div>
    );
  }

  return (
    <form
      className={`form-card ${compact ? "compact" : ""}`}
      onSubmit={submit}
    >
      <div className="form-grid">
        <label>
          نام و نام خانوادگی
          <input name="fullName" required autoComplete="name" />
        </label>

        <label>
          شرکت
          <input name="company" required autoComplete="organization" />
        </label>

        <label>
          ایمیل
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            dir="ltr"
          />
        </label>

        <label>
          شماره تماس
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            dir="ltr"
          />
        </label>

        <label>
          محصول موردنظر
          <select name="product" required defaultValue="">
            <option value="" disabled>
              انتخاب کنید
            </option>

            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          زمان مناسب تماس
          <input name="preferredTime" placeholder="مثلاً شنبه، ساعت ۱۰" />
        </label>

        <label>
          روش ترجیحی تماس
          <select name="contactMethod" defaultValue="تماس تلفنی">
            <option value="تماس تلفنی">تماس تلفنی</option>

            <option value="ایمیل">ایمیل</option>

            <option value="جلسه آنلاین">جلسه آنلاین</option>
          </select>
        </label>

        <label className="wide">
          توضیحات
          <textarea name="notes" rows={compact ? 3 : 5} />
        </label>
      </div>

      {error && (
        <div className="form-error">
          ارسال درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.
        </div>
      )}

      <button className="btn primary" type="submit" disabled={sending}>
        {sending ? "در حال ارسال..." : "ثبت درخواست دمو"}
      </button>

      <small>اطلاعات درخواست شما برای بررسی کارشناسان ثبت می‌شود.</small>
    </form>
  );
}
