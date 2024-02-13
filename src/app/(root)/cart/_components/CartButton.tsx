"use client";

import { useRouter } from "next/navigation";

function CartButton() {
  const router = useRouter();

  const handleClickGoToShopping = () => {
    alert("쇼핑하러 갑시다~~");
    router.replace("/");
  };

  return (
    <button
      onClick={handleClickGoToShopping}
      className="border border-black text-center font-semibold py-4 px-16"
    >
      쇼핑하러 가기
    </button>
  );
}

export default CartButton;
