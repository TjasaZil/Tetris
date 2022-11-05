import "@testing-library/jest-dom";
//import userEvent from "@testing-library/user-event"
import { screen, render } from "@testing-library/vue";
import Footer from "@/components/Shared/Footer.vue";

describe("Footer", () => {
  describe("layout", () => {
    it("has copyright symbol", () => {
      render(Footer);
      let copy = screen.queryByText("© Zuzexx");
      expect(copy).toBeInTheDocument();
    });

    describe("social media images", () => {
      it("has 2 images", () => {
        render(Footer);
        let images = screen.queryAllByRole("img");
        expect(images.length).toBe(2);
      });
      it("has image with github alt", () => {
        render(Footer);
        let github = screen.queryByAltText("github");
        expect(github).toBeInTheDocument();
      });
      it("has image with linkedin alt", () => {
        render(Footer);
        let linkedin = screen.queryByAltText("linkedin");
        expect(linkedin).toBeInTheDocument();
      });
      it("has src on github image", () => {
        render(Footer);
        let github = screen.queryByAltText("github");
        expect(github).toHaveAttribute("src");
      });
      it("has src on linkedin image", () => {
        render(Footer);
        let linkedin = screen.queryByAltText("linkedin");
        expect(linkedin).toHaveAttribute("src");
      });
    });
    describe("social media links", () => {
      it("has two links", () => {
        render(Footer);
        let links = screen.queryAllByRole("link");
        expect(links.length).toBe(2);
      });
      it("has link with href github", () => {
        render(Footer);
        let github = screen.queryByTestId("github-link");
        expect(github).toHaveAttribute("href", "https://github.com/zuzexx");
      });
      it("has link with href linkedin", () => {
        render(Footer);
        let linkedin = screen.queryByTestId("linkedin-link");
        expect(linkedin).toHaveAttribute(
          "href",
          "https://www.linkedin.com/in/tjasa-zilavec/"
        );
      });
    });
  });
});
