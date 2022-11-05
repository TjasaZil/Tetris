import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import Container from "@/components/Shared/Container.vue";

describe("Container", () => {
  describe("layout", () => {
    describe("rendered components", () => {
      it("has 2 button components", () => {
        render(Container);
        const button = screen.queryAllByTestId("main-button-component-test");
        expect(button.length).toBe(2);
      });
    });
    it("has image", () => {
      render(Container);
      const img = screen.queryByRole("img");
      expect(img).toBeInTheDocument();
    });

    it("has heading", () => {
      render(Container);
      const heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has separator", () => {
      render(Container);
      const separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has paragraph", () => {
      render(Container);
      const paragraph = screen.queryByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
    });
  });
  describe("props", () => {
    it("pushes appropriate alt prop", () => {
      render(Container, { props: { alt: "alt text" } });
      const alt = screen.queryByAltText("alt text");
      expect(alt).toBeInTheDocument();
    });
    it("pushes appropriate heading prop", () => {
      render(Container, { props: { heading: "test heading" } });
      const heading = screen.queryByText("test heading");
      expect(heading).toBeInTheDocument();
    });
    it("pushes appropriate paragraph prop", () => {
      render(Container, { props: { paragraph: "test paragraph" } });
      const paragraph = screen.queryByText("test paragraph");
      expect(paragraph).toBeInTheDocument();
    });
  });
});
