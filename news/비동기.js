function increase(number, callback){
  setTimeout(()=>{
    const result = number +10;
    if(callback){
      callback(result);
    }
  },1000)
}

console.log('작업 시작');
//callBack지옥임..; 10 20 30 ...
increase(0, result =>{
  console.log(result);
    increase(result, result =>{
      console.log(result);
          increase(result, result =>{
            console.log(result);
            increase(result, result =>{
            console.log(result);
              console.log('작업 완료');
        });
      });
  });
});



//promise
function increase2(number){
  const promise = new Promise((resolve, reject)=>{ //각각 성공,실패
   
      setTimeout(()=>{
        const result = number +10;
        if(result > 50 ){
          const e = new Error('NumberTooBig'); //에러객체
          return reject(e); 
        }
        resolve(result); // +10 후 성공처리
      }, 1000);
      
});
  return promise;
}


//async - await : ES8 
async function runTasks(){
  try{
    let result = await increase2(0);
    console.log(result);
    result = await increase2(result);
    console.log(result);
    result = await increase2(result);
    console.log(result);
    result = await increase2(result);
    console.log(result);
    result = await increase2(result);
    console.log(result);
    result = await increase2(result);
    console.log(result);
  }catch (e){
    console.log(e);
  }
}

runTasks();