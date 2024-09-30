import { CartItem } from '@/cart/actions/carto-action';
import { ItemCard } from '@/components';
import { products, type Product } from '@/data/products';
import { cookies } from 'next/headers';
type ProductInCart = {
  product: Product;
  quantity: number;
};

export const metadata = {
  title: 'Products in the cart',
  description: 'Products in the cart',
};

const CartPage = () => {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as CartItem;
  const productsInCart = getProductsInCart(cart);
  return (
    <section>
      <h2>Products in the cart</h2>

      <div>
        {productsInCart.map(({ product, quantity }) => (
          <ItemCard key={product.id} product={product} quantity={quantity} />
        ))}
      </div>
    </section>
  );
};

export default CartPage;

const getProductsInCart = (cart: CartItem): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id);
    if (!product) continue;

    productsInCart.push({
      product,
      quantity: cart[id],
    });
  }

  return productsInCart;
};
