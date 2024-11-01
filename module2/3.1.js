"use strict";
{
    // type assertion 
    let anyThing;
    anyThing = 'Next Level Developer';
    anyThing = 222;
    // (anyThing as number).toFixed
    let goToGm = (value) => {
        if (typeof value === 'string') {
            const converted = parseFloat(value) * 1000;
            return converted;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = goToGm(1000);
    console.log(result1);
}
