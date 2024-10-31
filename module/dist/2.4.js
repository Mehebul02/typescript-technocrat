"use strict";
{
    // spread operator
    /// rest operator
    // destructuring operator 
    let bros1 = ['Alif', 'Ried', 'Ashikur'];
    let bros2 = ['Mehebul', 'Apo', 'Mithan'];
    bros1.push(...bros2);
    console.log(bros1);
    const teamDevWizard = {
        member1: 'Mehebul Alif',
        member2: 'Ried Mia',
        member3: 'Ashikur Rahman',
        member4: 'Rohamot Rahman'
    };
    const teamCodex = {
        member1: 'Tanvir',
        member2: 'Billal',
        member3: 'Abtaha',
        member4: 'Aminul'
    };
    const memberList = Object.assign(Object.assign({}, teamDevWizard), teamCodex);
    // learn rest operator 
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Alif', 'Ashikur', 'Mitahan');
}
