import {render,screen} from "@testing-library/react"
import Button from "./Button";



describe("Button tests",()=>{
    test("should have button in dom",()=>{
      render(<Button>Click me</Button>);
     let button = screen.getByText("click me");

     expect(button).toBeInTheDocument();

    });
});