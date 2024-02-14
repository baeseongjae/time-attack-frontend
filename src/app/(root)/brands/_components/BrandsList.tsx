"use client";

import API from "@/api/index.api";
import { Brand } from "@/types/Brand.type";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function BrandsList() {
  const { data: brands, isLoading } = useQuery({
    queryKey: ["brands", { isList: true, type: "brands" }],
    queryFn: API.brands.getBrands,
  });

  return (
    <div>
      {isLoading ? (
        "로딩중......"
      ) : (
        <>
          <div className="text-center text-sm py-10">ALL</div>
          <ul className="text-sm px-12 grid grid-cols-6 gap-x-3 gap-y-6 ml-12">
            {brands &&
              brands.result.map((brand: Brand) => (
                <li key={brand.id}>
                  <Link href={`/brands/${brand.id}`}>{brand.nameKr}</Link>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BrandsList;
