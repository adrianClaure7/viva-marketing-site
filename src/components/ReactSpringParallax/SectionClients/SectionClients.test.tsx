import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SectionClients from "./SectionClients";

describe("<SectionClients />", () => {
  test("it should mount", () => {
    render(<SectionClients />);

    const sectionOne = screen.getByTestId("SectionClients");

    expect(sectionOne).toBeInTheDocument();
  });
});
