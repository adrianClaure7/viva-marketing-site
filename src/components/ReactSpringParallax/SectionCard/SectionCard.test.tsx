import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SectionCard from "./SectionCard";

describe("<SectionCard />", () => {
  test("it should mount", () => {
    render(<SectionCard title="Title" text="Text" buttonText="Test" imgUrl="https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2Fe73f8b60-0087-4cc4-8e5b-a1ad4bbb19b2%2F2Hi6gANjm8MAslQ3yhwKxwULvVz_Meeting_Transcript_UI.png%3Fbucket%3Ddocument&w=828&q=100" />);

    const sectionOne = screen.getByTestId("SectionCard");

    expect(sectionOne).toBeInTheDocument();
  });
});
