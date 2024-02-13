import Page from "@/components/Page";
import ProductsList from "../(home)/_components/ProductsList";
import BrandsList from "./_components/BrandsList";

function BrandsPage() {
  return (
    <Page>
      <section className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-3xl font-bold">Brands</h2>
        <BrandsList />
      </section>
      <section>
        <ProductsList />
      </section>
    </Page>
  );
}

export default BrandsPage;
