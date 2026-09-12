"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["/", "خانه"],
  ["/about", "شرکت"],
  ["/products", "محصولات"],
  ["/services", "خدمات"],
  ["/customers", "مشتریان"],
  ["/faq", "پرسش‌ها"],
  ["/contact", "تماس"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="/" aria-label="داده نگار ماتریس">
          <span className="brand-mark">M</span>

          <span>
            <b>داده نگار ماتریس</b>
            <small>راهکارهای مالی و اداری</small>
          </span>
        </a>

        <nav className={open ? "open" : ""} aria-label="منوی اصلی">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-demo"
            href="/demo"
            onClick={() => setOpen(false)}
          >
            درخواست دمو
          </a>
        </nav>

        <button
          className="menu"
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
