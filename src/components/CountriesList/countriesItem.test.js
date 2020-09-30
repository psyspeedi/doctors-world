import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import CountriesItem from "./countriesItem"


let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders countries data", () => {
  act(() => {
    render(<CountriesItem />, container);
  });
  expect(container.querySelector('img').src).toBe('')
  expect(container.querySelector('h3').textContent).toBe('')

  act(() => {
    render(<CountriesItem imgSrc='src' countryName='name' />, container);
  });
  expect(container.querySelector('img').src).toBe('http://localhost/src')
  expect(container.querySelector('h3').textContent).toBe('name')

});