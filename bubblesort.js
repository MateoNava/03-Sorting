
function bubbleSort (arr){
  if(arr.length==0) return []

  for(let i=0;i<arr.length;i++){
      for(let j=0; j<arr.length;j++){
        if(arr[j]>arr[j+1]){
          swap(arr,j,j+1)
        } 
      }
  }
  return arr
}


function swap(arr,num1,num2){
  let temporal = arr[num1]
  arr[num1] = arr[num2]
  arr[num2] = temporal
}



// expect( bubbleSort([2,4,1,5,3]) ).toEqual( [1,2,3,4,5] );

// expect( bubbleSort([5,3,1,2,4]) ).toEqual( [1,2,3,4,5] );
// expect( bubbleSort([3,5,1,2,4]) ).toEqual( [1,2,3,4,5] );
// expect( bubbleSort([3,1,5,2,4]) ).toEqual( [1,2,3,4,5] );
// expect( bubbleSort([3,1,2,5,4]) ).toEqual( [1,2,3,4,5] );
// expect( bubbleSort([3,1,2,4,5]) ).toEqual( [1,2,3,4,5] );

// expect( bubbleSort([1,3,2,4,5]) ).toEqual( [1,2,3,4,5] );
// expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );





