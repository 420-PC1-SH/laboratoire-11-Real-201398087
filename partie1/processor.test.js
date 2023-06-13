const processor = require('./processor.js');

describe("transmission processor", function () {

    
    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("returns -1 if '::' not found", function () {
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });
    
    test("returns id is a number", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result.id).toBe('number');
    });

    test("contien un rawData", function () {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).toBeTruthy();
    });

    test("Le rawData debute et termine <>", function () {
        let result = processor("9701::<489584872710");
        expect(result.rawData).toMatch(/^\<(\d*)\>$/);
    });

    

});
