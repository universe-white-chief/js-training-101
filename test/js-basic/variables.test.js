import {renameFun} from "../../src/js-basic/variables";

describe("js-basic", () => {
    it("variable rename function", () => {
        const result = renameFun();
        expect(result).toEqual("xiao bai")
    })
})