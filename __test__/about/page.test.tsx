import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/about/page";

describe("About Page", () => {
  it("should render about page", () => {
    render(<Page />);
    expect(screen.getByText("Ahmad Mufid Risqi")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("230411100031")).toBeInTheDocument();
  });
});
