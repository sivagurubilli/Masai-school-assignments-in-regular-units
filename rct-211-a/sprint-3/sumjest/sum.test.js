

const sum = require("./sum")

describe("testing sum function ",()=>{
    test("add 2 positive numbers",()=>{
        expect(sum(1,2)).toBe(3)
    })
    test("add 2 floating numbers",()=>{
        expect(sum(1.2,2.8)).toBe(4)
    })
    test("add 2 negative numbers",()=>{
        expect(sum(-1,-2)).toBe(-3)
    })
    test("call sum with no arguments",()=>{
        expect(sum()).toBe("sum invoked without arguments")
    })
})