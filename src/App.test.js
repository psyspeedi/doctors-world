import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import React from 'react'
import App from './App';

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

it("renders app", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.firstChild.classList.contains('App')).toBe(true)
});