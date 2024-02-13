"use client";

import API from "@/api/index.api";
import LogInModal from "@/components/LogInModal";
import Page from "@/components/Page";
import Price from "@/components/Price";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;
  const { data: product, isLoading } = useQuery({
    queryKey: ["products", { isList: false, id: productId }],
    queryFn: () => API.products.getProduct(productId),
  });
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();

  const handleClickCartButton = () => {
    if (!isLoggedIn) {
      const action = setModal(<LogInModal />);
      dispatch(action);
    }
  };

  return (
    <Page>
      {isLoading ? (
        "로딩중....."
      ) : (
        <section className="flex gap-x-10 max-w-screen-xl mx-auto">
          <h2 className="sr-only">상품 상세 페이지</h2>
          <div>
            <Image
              src={product.result.imgSrc}
              alt={product.result.name}
              className="object-cover"
              width={450}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-y-5 max-w-md mx-auto">
            <h6 className="font-bold text-lg">
              {product.result.brand.nameKr} / {product.result.brand.nameEn}
            </h6>
            <p className="text-lg">{product.result.name}</p>
            <ul className="my-8 flex flex-col gap-y-5">
              <li>
                <dl className="flex">
                  <dt className="w-1/4 font-semibold">정가</dt>
                  <dd>
                    <Price
                      amount={product.result.originalPrice}
                      isOriginal={true}
                    />
                  </dd>
                </dl>
              </li>
              <li>
                <dl className="flex">
                  <dt className="w-1/4 font-semibold">판매가</dt>
                  <dd>
                    <Price amount={product.result.price} isOriginal={false} />
                  </dd>
                </dl>
              </li>
              <li>
                <dl className="flex">
                  <dt className="w-1/4 font-semibold">배송</dt>
                  <dd>{product.result.deliveryType}</dd>
                </dl>
              </li>
              <li>
                <dl className="flex">
                  <dt className="w-1/4 font-semibold">잔여 재고</dt>
                  <dd>{product.result.onlineStock}</dd>
                </dl>
              </li>
            </ul>
            <button
              onClick={handleClickCartButton}
              className="border border-black bg-black text-white font-semibold h-12 transition hover:-translate-y-1 active:translate-y-0"
            >
              장바구니 담기
            </button>
          </div>
        </section>
      )}
    </Page>
  );
}

export default ProductDetailPage;
