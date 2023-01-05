import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SectionTwo from "./SectionTwo";

describe("<SectionTwo />", () => {
  test("it should mount", () => {
    render(<SectionTwo buttonText="Test" title="title" subTitle="subTitle"/>);

    const sectionOne = screen.getByTestId("SectionTwo");

    expect(sectionOne).toBeInTheDocument();
  });
});
