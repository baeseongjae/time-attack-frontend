import API from "@/api/index.api";
import Page from "@/components/Page";
import ProductsList from "./_components/ProductsList";

export default function Home() {
  API.products.getProducts();

  return (
    <Page>
      <section className="px-8 pt-28">
        <h2 className="text-center text-3xl font-bold py-12">Trending</h2>
        <ProductsList />
      </section>
    </Page>
  );
}
