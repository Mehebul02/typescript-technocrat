{

    // interface ------generic 

    interface Developer<T,Y = null> {
        name: string;
        computer: {
            brand: string;
            price: number;
            model: string;
            releaseYear: number
        },
        smartWatch:T,
        bike?:Y
    }

interface Adinor{
    brand:string,
    price:number,
    model:string
}


    const poorDeveloper:Developer<Adinor>={
        name:'Mehebul Alif',
        computer:{
            brand:'Hp',
            price:60000,
            model:'Eq2690',
            releaseYear:2022
        },
        smartWatch:{
            brand:'Adinor',
            price:5000,
            model:'er544',
        
        }
    }

interface Apple{
    brand:string,price:number,model:string,heardTrack:boolean,sleepTruck:boolean
}

interface YamahaBike{
    model:string,
    enginCapacity:string
}
    const riceDeveloper:Developer<Apple,YamahaBike>={
        name:'Mehebul Alif',
        computer:{
            brand:'Apple',
            price:60000,
            model:'Eq2690',
            releaseYear:2022
        },
        smartWatch:{
            brand:'Apple',
            price:5000,
            model:'er544',
            heardTrack:true,
            sleepTruck:true
        
        },
        bike:{
            model:'Yamaha',
            enginCapacity:'150cc'
        }
    }
}