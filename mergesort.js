function split(wholeArray) {

  /* tu código acá para definir el firstHalf y secondHalf array */
  if(wholeArray.length%2==0){
    firstHalf=wholeArray.slice(0,wholeArray.length/2)
    secondHalf=wholeArray.slice(wholeArray.length/2, wholeArray.length)
  } else {
    firstHalf=wholeArray.slice(0,(wholeArray.length/2)+1)
    secondHalf=wholeArray.slice((wholeArray.length/2)+1, wholeArray.length)
  }
  
  return [firstHalf, secondHalf];
}


function merge(arr1=[],arr2=[]){
  let newArr=[]

  while(arr1.length>0 || arr2.length>0){
    if(arr1[0]<arr2[0]){
      let actualValue=arr1.shift()
      newArr.push(actualValue)
    } else {
      let actualValue=arr2.shift()
      newArr.push(actualValue)
    }
  }
  return newArr
}


function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr
  }

  let [primeraMitad, segundaMitad] = split(arr)
  let primeraMitadOrdenada = mergeSort(primeraMitad)
  let segundaMitadOrdenada = mergeSort(segundaMitad)
  // console.log(primeraMitadOrdenada, segundaMitadOrdenada);
  // console.log(); merge(primeraMitadOrdenada, segundaMitadOrdenada)
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




  // let [mitad1, mitad2] = split(array)
 
  
  // let[mitad3,mitad4]=split(mitad1)
  // let[mitad5,mitad6]=split(mitad2)

  // console.log(mitad3);
  // console.log(mitad4);
  // console.log(mitad5);
  // console.log(mitad6);


  // let [mit1,mit2]=split(mitad3)
  // let [mit3,mit4]=split(mitad4)
  // let [mit5,mit6]=split(mitad5)
  // let [mit7,mit8]=split(mitad6)

  // console.log(mit1);
  // console.log(mit2);
  // console.log(mit3);
  // console.log(mit4);
  // console.log(mit5);
  // console.log(mit6);
  // console.log(mit7);
  // console.log(mit8);

  // let testMerge=merge(mit1,mit2)
  // console.log(testMerge);

  // return merge [mitad1,mitad2]







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





// [1,2,3,4,5,6,7,8]
// [1,2,3,4][5,6,7,8]

// [2,5,7,8][1,3,4,6]



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