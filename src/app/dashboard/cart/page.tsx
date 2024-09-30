import { CartItem } from '@/cart/actions/carto-action';
import { Header, ItemCard } from '@/components';
import { WidgetItem } from '@/components/dashboard/widget-item/WidgetItem';
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

  const totalToPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0
  );

  return (
    <section>
      <Header />
      <div className="p-2">
        <h2 className="text-4xl font-semibold">Products in the cart</h2>

        <div className="w-full grid grid-1 lg:grid-cols-[1fr_400px] ">
          <div>
            {productsInCart.map(({ product, quantity }) => (
              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))}
          </div>

          <div>
            <WidgetItem title="Toal to pay">
              <h4>Total to pay: ${(totalToPay * 1.15).toFixed(2)}</h4>
              <span>Inpuestos ${(totalToPay * 0.15).toFixed(2)}</span>
            </WidgetItem>
          </div>
        </div>
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
