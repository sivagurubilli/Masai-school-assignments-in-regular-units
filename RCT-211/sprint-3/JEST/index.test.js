
const sum = require("./index")

describe("testing sum functin",()=>{
    test("add 2 positive numbers",()=>{
        expect(sum(1,2)).toBe(3);

    });
    test("add 2 negitive numbers",()=>{
        expect(sum(-1,-2)).toBe(-3);

    });
    test("add 2 floating numbers",()=>{
        expect(sum(1.2,1.4)).toBe(2.6);

    });

})


