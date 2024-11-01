"use strict";
// Ternary, optional chaining & nullish coalescing operator
{
    const age = 19;
    // if (age <=17){
    //     console.log('Not Adult');
    // }
    // else{
    //     console.log('adult');
    // }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);
    // nullish coalescing operator
    const isAuthentic = null;
    const result = isAuthentic !== null && isAuthentic !== void 0 ? isAuthentic : 'Gest';
    console.log({ result });
}
