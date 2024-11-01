// Constraints type 

const addCourseToStudent = <T extends {name:string, email:string}>(student: T) => {
    const course = 'Next level Web developer'
    return {
        ...student,
        course
    }

}

const student1 = addCourseToStudent<{name:string,email:string,devType:string}>({ name: 'Mr. X', email: 'mehebul2122@gmail.com', devType: 'NLWD' })
const student2 = addCourseToStudent({ name: 'Mr. X', email: 'mehebul2122@gmail.com', devType: 'NLWD', hasWatch: 'Apple Watch' })

const student3 = addCourseToStudent({name:'mehebul',email:'jdkdj'})

console.log(student1);