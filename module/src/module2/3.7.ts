// Generic Constraints with keyOf operator
{

    type Vehicle={
        bike:string;
        car:string;
        ship:string
    };
    
    type owner = 'bike' | 'car' |'ship' //manually
    
    type  Owner2 = keyof Vehicle


   const  getPropertyValue= <X,Y extends keyof X >(obj:X,key:Y){
return obj
    }

    const user={
        name:'alif',
        age:33,
        city:'Kth'
    }
    const result = getPropertyValue(user,'name')
}

