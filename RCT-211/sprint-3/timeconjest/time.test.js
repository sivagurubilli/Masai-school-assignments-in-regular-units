

const timeconv =require("./time")

describe("testing timeconv function ",()=>{
    test("convert time to sec",()=>{
        expect(timeconv(5000)).toBe("5 seconds")
    })
    test("convert time to minute",()=>{
        expect(timeconv(60000)).toBe("1 minutes 0 seconds")
    })
    test("convert time to minutes",()=>{
        expect(timeconv(180000)).toBe("3 minutes 0 seconds")
    })
    test("convert time to minutes",()=>{
        expect(timeconv(200000)).toBe("3 minutes 20 seconds")
    })
})
