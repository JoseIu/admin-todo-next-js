import { Header, ProductCar } from '@/components';
import { products } from '@/data/products';

const ProducstPage = () => {
  return (
    <section>
      <Header />
      <h2>ProducstPage</h2>

      <div className="p-2 grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
        {products.map((product) => (
          <ProductCar key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProducstPage;
