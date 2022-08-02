import { render } from "@testing-library/react";

import Button from "./button";

describe.skip("Text", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
