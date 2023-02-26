const object ={
    somewhere :{
      deep:{
        inside:3,
        array:[1,2,3,4]
      },
      bar:2
    },
    foo:1
  }
  
  
  let nextObject = { //inside 4 수정위한 복사1
    ...object,
    somewhere:{
      ...object.somewhere,
      deep:{
        ...object.somewhere.deep,
        inside:4
  }
  }
  };
  
  console.log('object :');
  console.log(object.somewhere.deep); //inside: 3
  console.log('nextObject :');
  console.log( nextObject.somewhere.deep); //inside: 4
  
  
  let nextObject2 ={ //arry 추가위한 복사1
    ...object,
    somewhere:{
    ...object.somewhere,
    deep:{
    ...object.somewhere.deep,
    
    array: object.somewhere.deep.array.concat(5) //여기
  }
  }
  };

  console.log('nextObject2 :');
  console.log(nextObject2.somewhere.deep);  //array에 5있음  