//Day 5 task - loops
let data = {
    "name": "Deepak",
    "age": 23,
    "city": "Ooty",
    "isStudent": true,
    "skills": "JavaScript",
    }
  
  for(const details in data){
    console.log(`${details}: ${data[details]}`)
  }
  
  let arr = [{
    "name": "Deepak",
    "age": 23,
    "city": "Ooty",
    "isStudent": true,
    "skills": "JavaScript",
  }];
  
  for (const info of arr) {
    console.log(info);
  }
  
  let arr2 = [{
    "name": "Deepak",
    "age": 23,
    "city": "Ooty",
    "isStudent": true,
    "skills": "JavaScript",
  }];
  
  for (let i = 0; i < arr.length; i++) {
    console.log(arr2[i]);
  }
  
  let arr3 = [{
    "name": "Deepak",
    "age": 23,
    "city": "Ooty",
    "isStudent": true,
    "skills": "JavaScript",
  }];
  
  arr3.forEach((element) => console.log(element));
  
  
