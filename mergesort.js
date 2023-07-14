function split(wholeArray) {
let firstHalf,secondHalf
  /* tu código acá para definir el firstHalf y secondHalf array */

  if(wholeArray.length%2==0){
    firstHalf=wholeArray.slice(0,wholeArray.length/2)
    secondHalf=wholeArray.slice(wholeArray.length/2)
  } else {
    firstHalf=wholeArray.slice(0,(wholeArray.length/2)+1)
    secondHalf=wholeArray.slice((wholeArray.length/2)+1)
  }
  
  return [firstHalf, secondHalf];
}

//SOLUCION VIDEO REVIEW
function merge(arr1, arr2) {
  var i1 = 0;
  var i2 = 0;
  var mergedArr = [];
  while (i1 < arr1.length || i2 < arr2.length) {
      if (arr1[i1] < arr2[i2] || !arr2[i2]) {
          mergedArr.push(arr1[i1]);
          i1++;
      } else {
          mergedArr.push(arr2[i2]);
          i2++;
      }
  }
  return mergedArr;
}

//NUESTRA SOLUCION MERGE GENERA UN LOOP ETERNO
// function merge(arr1=[],arr2=[]){
//   let newArr=[]

//   while(arr1.length>0 || arr2.length>0){
//     if(arr1[0]<arr2[0]){
//       let actualValue=arr1.shift()
//       newArr.push(actualValue)
//     } else {
//       let actualValue=arr2.shift()
//       newArr.push(actualValue)
//     }
//   }
//   return newArr
// }


function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr
  }

  let [primeraMitad, segundaMitad] = split(arr)
  let half1 = mergeSort(primeraMitad)
  let half2 = mergeSort(segundaMitad)

  return merge(half1,half2)
 
}




// function mergeSort(array=[]){
  
//   if (array.length<=1)return array

//   let [firstHalf,secondHalf]=split(array)


// let primerMitadOrdenada=mergeSort(firstHalf)
// let segundaMitadOrdenada = mergeSort(secondHalf)

// return merge(primerMitadOrdenada,segundaMitadOrdenada)




// function mergeSort(arr) {
//   if (arr.length <= 1) {
//       return arr
//   }

//   let [primeraMitad, segundaMitad] = split(arr)
//   let primeraMitadOrdenada = mergeSort(primeraMitad)
//   let segundaMitadOrdenada = mergeSort(segundaMitad)
//   // console.log(primeraMitadOrdenada, segundaMitadOrdenada);
//   return merge(primeraMitadOrdenada, segundaMitadOrdenada)
// }



  // let newArr = split(array)

  // let newArr2 = []
  // for(let i=0;i<newArr.length; i++){
  //   newArr2.push(split(newArr[i]))
  // }

  // console.log(newArr2);

  // let newArr3=[]
  // for(let i=0;i<newArr2.length;i++){
  // //  for(let j=0; j)
  //   newArr3.push(split(newArr2[i]))
  // }

  // console.log(newArr3);


  // function recSplit(array){
  //   if(array.length == 1) return

  //   let newArr=split(array)

  //   console.log(newArr);
    
  //   return recSplit(newArr)
  // }


  // let arrayLength=array.length
  // let newArr = split(array)
  // let newArr2= split(newArr)
  // console.log(newArr2);



//expect( merge([4,2,7,5],[8,1,6,3]) ).toEqual([1,2,3,4,5,6,7,8] );
// [4,2,7,5,8,1,6,3]
// [[4,2,7,5],[8,1,6,3]]
// [[4,2],[7,5],[8,1],[6,3]]
// [[4],[2],[7],[5],[8],[1],[6],[3]]
// [[2,4],[5,7],[1,8],[3,6]]
// [[2,4,5,7],[1,3,6,8]]
// [1,2,3,4,5,6,7,8]


// function merge(arr1,arr2){
//   let newArr=[]
//   for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//       if(arr1[i] < arr2[j]){
//         let actualValue=arr1.shift()
//         newArr.push(actualValue)
//       }
//     }
//   }
//   return newArr

// }