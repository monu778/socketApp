const students = [{
    "id":1,
    "name":"sravan",
    "schoolId":100
},
{
    "id":2,
    "name":"reddy",
    "schoolId":101
}]

const grades = [{
    "id":1,
    "schoolId":100,
    "grade":80
},
{
    "id":1,
    "schoolId":100,
    "grade":83
}]

const getStudent = (id) =>{
   return new Promise((resolve,reject) =>{
        const user = students.find((student) =>
             id == student.id
        );
        if(user) {
            resolve(user)
        } else {
            reject("User Not found")
        }

    });
}
getStudent(2).then(function(data){
    console.log(data)
},function(error){
    console.log(error);
})

const getGrades = (id) => {
    return new Promise((resolve,reject) => {
        resolve((grades.filter((grade) => id == grade.schoolId )))
    });
}

const getStatus = (id) =>{
    
   return getStudent(id).then((tempstudent)=> {
        student = tempstudent
        return getGrades(student.schoolId).then((grades) => {
            let avg = 0;
            if(grades.length) {
                avg = grades.map((grade) => grade.grade).reduce((a,b) => a+b)/grades.length;
            }

            return `${student.name}  has average of ${avg}` 
        });
    });
}

getStatus(1).then(data => {
    console.log(data);
}).catch((e) => {
    console.log(e);
});

// with async and await

getStatusAlt = async (id) => {
   const user = await getStudent(id);
   const grades = await getGrades(user.schoolId);
   let avg = 0;
   avg = grades.map((grade) => grade.grade).reduce((a,b) => a+b)/grades.length;
   return `${user.name} has ${avg}`;
    
}

getStatusAlt(1).then(data => {
    console.log(data);
});

/*


 async equals to 
 () => {

    return new Promise(resolve,reject) => {
        resolve('Some value')
    }
 }

*/