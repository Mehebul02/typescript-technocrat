// Reference type --->> Object 

const user: {
   readonly company:string //Literal type
    Name: string;
    Designation: string;
    employerId: Number;
    salary?: number; //Optional Type
    isMarried:boolean;
} = {
    company:'bdCalling It Ltd',
    Name: 'Mehebul Alif',
    Designation: 'Front End Developer',
    employerId: 11146,
    salary:44,
    isMarried:false
}
console.log(user);

user.company='Bdcalling'