// union type
{
    // type FrontEndDeveloper='FakibazDeveloper'|'FrontEndDeveloper' 

    // const newDeveloper:FrontEndDeveloper='FakibazDeveloper'
    
    // type User={
    //     name:string,
    //     email:string;
    //     gender:'male'| 'female',
    //     bloodGroup:'A+'|'B+'|'A-'
    // }

    // const user:User={
    //     name:'Mehebul Alif',
    //     email:'hvg',
    //     gender:'male',
    //     bloodGroup:'A+'
    // }

    type FrontEndDeveloper ={
        skills:string[],
        designation1:'Fronent Developer',
    }

    type BackEndDeveloper={
        skills:string[]
        designation2:'Backend Developer'
    }

    type FullStackDeveloper =FrontEndDeveloper & BackEndDeveloper

    const fullStackDeveloper:FullStackDeveloper={
        skills:['html','css'],
        designation1:'Fronent Developer',
        designation2:'Backend Developer'
    }
}

