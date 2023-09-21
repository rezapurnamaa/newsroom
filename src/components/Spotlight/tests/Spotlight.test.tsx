import React from "react";
import Spotlight from "../spotlight";
import { render, screen } from "@testing-library/react";

describe("<Spotlight />", () => {
  it("render correctly", () => {
    render(<Spotlight />);
    screen.getByText("hello");
  });
});
