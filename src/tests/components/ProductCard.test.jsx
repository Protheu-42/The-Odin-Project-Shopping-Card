import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard";
import userEvent from "@testing-library/user-event";

const PRODUCT = {
  id: 1,
  image: "not found",
  title: "Example title",
  description: "This is a example",
  price: 12,
};

describe("Does correctly render API info", () => {
  it("renders product dependent fields", () => {
    render(<ProductCard product={PRODUCT} />);

    const cardTitle = screen.getByText("Example title");
    const description = screen.getByText("This is a example");
    const price = screen.getByText("12");

    expect(cardTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("subtract operations", async () => {
    const addToCart = vi.fn();
    const user = userEvent.setup();

    render(<ProductCard product={PRODUCT} />);

    const quantity = screen.getByRole("spinbutton", { name: "quantity" });
    const incrementButton = screen.getByRole("button", { name: "+" });
    const subtractButton = screen.getByRole("button", { name: "-" });

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(subtractButton);

    expect(quantity.value).toBe("1");
  });

  it("subtract operations does not allow negative numbers", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={PRODUCT} />);

    const quantity = screen.getByRole("spinbutton", { name: "quantity" });
    const subtractButton = screen.getByRole("button", { name: "-" });

    await user.click(subtractButton);

    expect(quantity.value).toBe("0");
  });

  it("increment operation works", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={PRODUCT} />);
    const quantity = screen.getByRole("spinbutton", { name: "quantity" });
    const incrementButton = screen.getByRole("button", { name: "+" });

    await user.click(incrementButton);

    expect(quantity.value).toBe("1");
  });

  it("Add to cart callback function its called", async () => {
    const addToCartFn = vi.fn();
    const user = userEvent.setup();

    render(<ProductCard product={PRODUCT} addToCart={addToCartFn} />);
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(addToCartButton);

    expect(addToCartFn).toHaveBeenCalled();
  });
});
