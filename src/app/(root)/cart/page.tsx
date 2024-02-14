import Page from "@/components/Page";
import CartButton from "./_components/CartButton";

function CartPage() {
  return (
    <Page>
      <section className="max-w-lg mx-auto flex flex-col items-center gap-y-10">
        <h2 className="text-3xl font-bold text-center py-10">장바구니</h2>
        <p className="">장바구니가 비어 있습니다.</p>
        <CartButton />
      </section>
    </Page>
  );
}

export default CartPage;
