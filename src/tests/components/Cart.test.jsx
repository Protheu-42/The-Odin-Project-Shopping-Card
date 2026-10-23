import { describe, expect, it } from "vitest";
import useCart from "../../components/Cart";
import { renderHook, act } from "@testing-library/react";

const PRODUCT = {
  id: 1,
  title: "Example title",
  image: "not found",
  description: "This is a example",
  price: 12,
  quantity: 2,
};

describe("Cart basic functions", () => {
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
        title: "Example title",
        image: "not found",
        description: "This is a example",
        price: 12,
        quantity: 2,
      },
    ]);
  });
});
