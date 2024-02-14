"use client";

import API from "@/api/index.api";
import { Product } from "@/types/Product.type";
import { useQuery } from "@tanstack/react-query";
import ProductsListItem from "./ProductsListItem";

function ProductsList() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, type: "popular" }],
    queryFn: API.products.getProducts,
    refetchOnWindowFocus: true,
  });

  const { data: products, isLoading } = returnValueOfUseQuery;

  return (
    <div>
      {isLoading ? (
        "로딩중....."
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
          {products &&
            products.result.map((product: Product) => (
              <li key={product.id}>
                <ProductsListItem product={product} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
