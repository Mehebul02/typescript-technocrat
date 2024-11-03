
// mapped type 

type AreaNumber ={
    height:string;
    width:string
}

type AreaString ={
    [ key in keyof AreaNumber]:boolean
}