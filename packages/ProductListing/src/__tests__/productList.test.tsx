import { render, screen } from "@testing-library/react";
import ProductList from "../productList";
import { Provider } from "react-redux";
import store from "../store";

describe("MyComponent", () => {
  it("renders heading", () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(screen.getByText("Sample Output")).toBeInTheDocument();
  });
});
