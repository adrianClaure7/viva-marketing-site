import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SectionOne from "./SectionOne";

describe("<SectionOne />", () => {
  test("it should mount", () => {
    render(<SectionOne buttonText="Test" textAlign="text-left" />);

    const sectionOne = screen.getByTestId("SectionOne");

    expect(sectionOne).toBeInTheDocument();
  });
});
