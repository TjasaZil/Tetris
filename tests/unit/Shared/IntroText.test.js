import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import IntroText from "@/components/Shared/IntroText.vue";

describe("IntroText", () => {
  describe("layout", () => {
    it("has heading", () => {
      render(IntroText);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has paragraph", () => {
      render(IntroText);
      let paragraph = screen.queryByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
    });
    it("has separator", () => {
      render(IntroText);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
  });
  describe("properly handles data", () => {
    it("properly handles heading input", () => {
      render(IntroText, { props: { heading: "this is a heading" } });
      const heading = screen.queryByText("this is a heading");
      expect(heading).toBeInTheDocument();
    });
    it("properly handles paragraph input", () => {
      render(IntroText, { props: { paragraph: "this is a paragraph" } });
      const paragraph = screen.queryByText("this is a paragraph");
      expect(paragraph).toBeInTheDocument();
    });
  });
});
