
{
    //// promise
    // simulate
    const getData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = response.json()
        console.log(data)
    }

    type CustomObj ={name:string}

    const createPromise =():Promise<CustomObj>=>{
        return new Promise ((resolve, reject)=>{
            const data :CustomObj = {name:'Mehebul Alif'}

            if(data){
                resolve(data)
            }
            else{
                reject('Reject data')
            }
        })

        // calling create promise function
        const showData =async():Promise<CustomObj>=>{
            const data:CustomObj =await createPromise()
return data
        }
        showData()
    }



    // Promise

    
}