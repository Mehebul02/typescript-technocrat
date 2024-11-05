{

    // type guards 


    // typeof ---- type guards 

    type Alphanumeric= string | number


    const add =(params1: Alphanumeric, params2 :Alphanumeric):Alphanumeric=>{
        if(typeof params1  === 'number' &&  params2 === 'number'){
            return params1 + params2
        }else{
          return  params1.toString() + params2.toString()
        }
    };
    const result1 = add(6,9)
    console.log(result1);
}