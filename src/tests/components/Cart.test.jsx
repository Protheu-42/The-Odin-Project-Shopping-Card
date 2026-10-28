import { describe, expect, it } from "vitest";
import useCart from "../../components/Cart";
import { renderHook, act } from "@testing-library/react";

const PRODUCT = {
  id: 1,
  title: "Wireless Headphones",
  image: "headphones.jpg",
  description: "Bluetooth headphones with noise cancellation",
  price: 59.99,
  quantity: 2,
};

const PRODUCT_2 = {
  id: 2,
  title: "Mechanical Keyboard",
  image: "keyboard.jpg",
  description: "Mechanical keyboard with RGB backlighting",
  price: 89.99,
  quantity: 1,
};

describe("Cart add and remove functions", () => {
  it("add to cart", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT.id,
        PRODUCT.title,
        PRODUCT.image,
        PRODUCT.description,
        PRODUCT.price,
        PRODUCT.quantity,
      ),
    );

    expect(result.current.cart).toStrictEqual([
      {
        id: 1,
        title: "Wireless Headphones",
        image: "headphones.jpg",
        description: "Bluetooth headphones with noise cancellation",
        price: 59.99,
        quantity: 2,
      },
    ]);
  });

  it("remove correctly from cart", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT.id,
        PRODUCT.title,
        PRODUCT.image,
        PRODUCT.description,
        PRODUCT.price,
        PRODUCT.quantity,
      ),
    );

    act(() =>
      result.current.addToCart(
        PRODUCT_2.id,
        PRODUCT_2.title,
        PRODUCT_2.image,
        PRODUCT_2.description,
        PRODUCT_2.price,
        PRODUCT_2.quantity,
      ),
    );

    act(() => result.current.removeFromCart(0));

    expect(result.current.cart[0]).toStrictEqual({
      id: 2,
      title: "Mechanical Keyboard",
      image: "keyboard.jpg",
      description: "Mechanical keyboard with RGB backlighting",
      price: 89.99,
      quantity: 1,
    });
  });
});

describe("Cart quantity related functions", () => {
  it("descrease quantity number", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT.id,
        PRODUCT.title,
        PRODUCT.image,
        PRODUCT.description,
        PRODUCT.price,
        PRODUCT.quantity,
      ),
    );

    act(() => result.current.setQuantity(0, "-"));

    expect(result.current.cart[0].quantity).toStrictEqual(1);
  });

  it("don't descrease bellow 1", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT_2.id,
        PRODUCT_2.title,
        PRODUCT_2.image,
        PRODUCT_2.description,
        PRODUCT_2.price,
        PRODUCT_2.quantity,
      ),
    );

    act(() => result.current.setQuantity(0, "-"));

    expect(result.current.cart[0].quantity).toStrictEqual(1);
  });

  it("increase quantity", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT_2.id,
        PRODUCT_2.title,
        PRODUCT_2.image,
        PRODUCT_2.description,
        PRODUCT_2.price,
        PRODUCT_2.quantity,
      ),
    );

    act(() => result.current.setQuantity(0, "+"));

    expect(result.current.cart[0].quantity).toStrictEqual(2);
  });

  it("Set quantity", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT_2.id,
        PRODUCT_2.title,
        PRODUCT_2.image,
        PRODUCT_2.description,
        PRODUCT_2.price,
        PRODUCT_2.quantity,
      ),
    );

    act(() => result.current.setQuantity(0, "set", 5));

    expect(result.current.cart[0].quantity).toStrictEqual(5);
  });

  it("Doesn't set bellow 1", () => {
    const { result } = renderHook(() => useCart());

    act(() =>
      result.current.addToCart(
        PRODUCT_2.id,
        PRODUCT_2.title,
        PRODUCT_2.image,
        PRODUCT_2.description,
        PRODUCT_2.price,
        PRODUCT_2.quantity,
      ),
    );

    act(() => result.current.setQuantity(0, "set", -1));

    expect(result.current.cart[0].quantity).toStrictEqual(1);
  });
});
