let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
//   MAP METHOD
    arr.map(arr => {
      if (arr.marks > 50) {
        console.log(`Name: ${arr.name}, Marks: ${arr.marks}`);
      }
    });
  
  
 
//   FOREACH METHOD 
    arr.forEach(arr => {
      if(arr.marks>50){
        console.log(arr.name);
      }
    });
  
  
//   PUSH METHOD
    const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(newStudent);
    console.log(arr);
  
  
  
//    FILTER METHOD
    const passedStudents = arr.filter(arr => arr.marks >= 50);
    console.log(passedStudents);

  
  
//    CONCATENATION METHOD
    const additionalStudents = [
      { id: 4, name: "emma", age: "21", marks: 70 },
      { id: 5, name: "peter", age: "22", marks: 65 },
      { id: 6, name: "lisa", age: "20", marks: 55 }
    ];
  
    const concatenatedArray = arr.concat(additionalStudents);
  
    console.log(concatenatedArray);
  