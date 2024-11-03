
{
    //// promise
    // simulate
    const createPromise =()=>{
        return new Promise ((resolve, reject)=>{
            const data :string = 'Data ase'

            if(data){
                resolve(data)
            }
            else{
                reject('Reject data')
            }
        })

        // calling create promise function
        const showData =async()=>{
            const data =await createPromise
            console.log(data)
        }
        showData()
    }
}