import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image">
        <Image
          src={product.image}
          alt={`تصویر کاتالوگ ${product.name}`}
          fill
          sizes="(max-width: 720px) 100vw, 33vw"
        />
      </div>

      <div className="product-body">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>

        <a href={`/products/${product.slug}`}>
          مشاهده جزئیات
          <ArrowLeft size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
