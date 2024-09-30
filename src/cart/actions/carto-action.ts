import { getCookie, hasCookie, setCookie } from 'cookies-next';

export interface CartItem {
  [id: string]: number;
}

export const getCookieCart = (): CartItem => {
  const cartKookie = hasCookie('cart');

  if (!cartKookie) {
    return {};
  }

  const cart = JSON.parse((getCookie('cart') as string) ?? '{}');
  return cart;
};

export const addProductToCart = (id: string): void => {
  const cokkieCart = getCookieCart();

  if (!cokkieCart[id]) {
    cokkieCart[id] = 1;
  } else {
    cokkieCart[id] += 1;
  }

  setCookie('cart', JSON.stringify(cokkieCart));
};

export const removeProductFromCart = (id: string): void => {
  const cokkieCart = getCookieCart();

  if (!cokkieCart[id]) return;

  delete cokkieCart[id];

  setCookie('cart', JSON.stringify(cokkieCart));
};

export const removeSingleItemFromCart = (id: string): void => {
  const cokkieCart = getCookieCart();
  if (!cokkieCart[id]) return;

  const itemsIncart = cokkieCart[id] - 1;

  if (itemsIncart <= 0) {
    delete cokkieCart[id];
  } else {
    cokkieCart[id] = itemsIncart;
  }

  setCookie('cart', JSON.stringify(cokkieCart));
};
