const array = [1,2,3,4,5];

const nextArrayBad = array;  
nextArrayBad[0] = 100;
console.log(array === nextArrayBad);  //같음
console.log(array + ' -> ' + nextArrayBad);


const nextArrayGood = [...array];  
nextArrayGood[0] = 100;
console.log(array === nextArrayGood);  //다름

console.log("=============================="); 


const object ={
  foo:'bar',
  value:1
};

const nextObjectBad = object;   
nextObjectBad.value = nextObjectBad.value+1;
console.log(object === nextObjectBad);   //같음


const nextObjectGood = {  
  ...object,
  value : object.value + 1 
};

console.log(object === nextObjectGood); //다름


console.log(object);
console.log(nextObjectGood);


console.log("=============배열일떄================="); 
const todos =[{id:1, checked : true}, {id:2, checked:true}];

const nextTodos = [...todos];
nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]);  //같다

nextTodos[0] = {
  ...nextTodos[0],
  checked:true //명확하게 다름을 표기
};
console.log(todos[0].checked + ' -> '+nextTodos[0].checked);
console.log(todos[0] === nextTodos[0]); //다르다


console.log("=============객체일때================="); 
const complexObject ={};
const nextComplexObject ={
  ...complexObject,

  objectInside:{
  ...complexObject.objectInside,
  enabled:false
}
};
console.log(complexObject === nextComplexObject); //다르다 
console.log(complexObject.objectInside === nextComplexObject.objectInside); //다르다