"use strict";
//  destructuring operator 
{
    // destructuring object 
    const user = {
        id: 11146,
        name: {
            firstName: 'Mehebul',
            lastName: 'Alif',
            designation: 'Front End Developer'
        },
        contact: '01642287450',
        address: 'Dhaka',
    };
    const { contact, name: { lastName } } = user;
    // destructuring array
    const myColig = ['Ashikur', 'Riead', 'Tuafel', "Rhamat", 'Mithan', 'Apo'];
    const [, , rahamad, , apu] = myColig;
}
