import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Spinner from "../spinner"


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders spinner", () => {
  act(() => {
    render(<Spinner />, container);
  });
  expect(container.firstChild.classList.contains('spinner')).toBe(true)
});