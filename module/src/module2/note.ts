{

    // interface Person{
    //     name:string;
    //     age:number;
    //     permanentAddress:string;
    //     presentAddress?:string
    // }


    const person = ['Mehebul Alif', 'Apo']
    const person2 = ['Ashikur', 'Riead']
    person.push(...person2)


    
    const greatFriends = (...friends: string[]): string => {

        friends.forEach((friend) => console.log(`Hi ${friend}`));
        return "All friends have been greeted!";

    }
    console.log(greatFriends('Ashikur', 'Riead'));




}