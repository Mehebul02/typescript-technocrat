
{


    // type assertion 

    let anyThing: any;

    anyThing = 'Next Level Developer';

    anyThing = 222;
    // (anyThing as number).toFixed



    let goToGm = (value: string | number): string | number | undefined => {

        if (typeof value === 'string') {
            const converted = parseFloat(value) * 1000;
            return converted
        }

        if (typeof value === 'number') {
            return value * 1000
        }
    }

    const result1 = goToGm(1000) as number;
    const result2 = goToGm('233') as string;
    console.log(result1);



    type customError = {
        message: string
    }

    try {

    }
    catch (error) {
        console.log((error as customError).message);
    }


}
