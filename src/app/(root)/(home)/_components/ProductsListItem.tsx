import Price from "@/components/Price";
import Image from "next/image";
import Link from "next/link";

interface ProductListItemProps {
  product: {
    id: string;
    title: string;
    imgSrc: string;
    name: string;
    price: string;
    originalPrice: string;
    brand: {
      nameEn: string;
    };
  };
}

function ProductsListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/products/${product.id}`} className="flex flex-col gap-y-3">
      <Image
        src={product.imgSrc}
        alt={product.name}
        className="object-cover"
        width={300}
        height={300}
      />
      <h6 className="font-semibold">{product.brand.nameEn}</h6>
      <p>{product.name}</p>
      <div>
        <Price amount={product.originalPrice} isOriginal={true} />
        <Price amount={product.price} isOriginal={false} />
      </div>
    </Link>
  );
}

export default ProductsListItem;
