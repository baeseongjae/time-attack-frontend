import Page from "@/components/Page";
import ProductsList from "./_components/ProductsList";

export default function Home() {
  return (
    <Page>
      <section>
        <h2 className="text-center text-3xl font-bold py-12">Trending</h2>
        <ProductsList />
      </section>
    </Page>
  );
}
