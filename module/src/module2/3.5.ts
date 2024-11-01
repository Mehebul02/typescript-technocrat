{

    // Generic function type 

    const genericArray =<T>(param:T):T[]=>{
        return [param]
    }

    const res1 = genericArray <string>('44fdfdf');
    const res2 = genericArray <number>(33);

    type User={id:number,name:string}
    const res3 =genericArray ({id:33, name:'Mehebul Alif'})


    // generic tuple function 

    const genericTuple  =<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }

    const res10 = genericTuple <string,true>('44fdfdf',true);
    const res11 = genericTuple <number,string>(33,'Alif');

    // type Users={id:number,name:string}
    const res12 =genericTuple<string,{name:string}>('Bangladesh', {name:'Mehebul Alif'})


    const addCourseToStudent =<T>(student:T)=>{
        const course ='Next level Web developer'
        return{
            ...student,
            course
        }

    }

    const student1 =addCourseToStudent({name:'Mr. X', email:'mehebul2122@gmail.com',devType:'NLWD'})
    const student2 =addCourseToStudent({name:'Mr. X', email:'mehebul2122@gmail.com',devType:'NLWD',hasWatch:'Apple Watch'})

    console.log(student1);
}