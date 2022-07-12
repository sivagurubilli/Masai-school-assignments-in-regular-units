

import React from "react";

import Counter from "./counter";
import {fireEvent, render} from "@testing-library/react"

import "@testing-library/jest-dom/extend-expect"
test("header renders with counter",()=>{
    const component = render(<Counter/>)
    const headerEl= component.getByTestId("header")

    expect(headerEl.textContent).toBe("counter")
})



test("counter start with text of 0 " ,()=>{
    const {getByTestId} = render(<Counter/>)
    const counterEl = getByTestId("count") 
    expect(counterEl.textContent).toBe("0")

})

test("add but with renders with + " ,()=>{
    const {getByTestId} = render(<Counter/>)
    const addbutEl = getByTestId("addbut") 
    expect(addbutEl.textContent).toBe("add")

})

test("decr button renders with - " ,()=>{
    const {getByTestId} = render(<Counter/>)
    const decrbutEl = getByTestId("decbut") 
    expect(decrbutEl.textContent).toBe("dec")

})

test(" adding and subtract onclick element" ,()=>{
    const {getByTestId} = render(<Counter/>)
    const decrbutEl = getByTestId("decbut") 
    const addbutEl = getByTestId("addbut") 
    const counterEl = getByTestId("count") 
   

    fireEvent.click(addbutEl)
  expect(counterEl.textContent).toBe("5")
  fireEvent.click(decrbutEl)
  expect(counterEl.textContent).toBe("0")


})