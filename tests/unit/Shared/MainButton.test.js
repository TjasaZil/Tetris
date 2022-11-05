import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import MainButton from "@/components/Shared/MainButton.vue";

describe("MainButton", () => {
  describe("layout", () => {
    it("has button component", () => {
      render(MainButton);
      const button = screen.queryByRole("button");
      expect(button).toBeInTheDocument();
    });
  });
  describe("props", () => {
    it("pushes text prop", () => {
      render(MainButton, { props: { text: "button text" } });
      const text = screen.queryByText("button text");
      expect(text).toBeInTheDocument();
    });
  });
});
