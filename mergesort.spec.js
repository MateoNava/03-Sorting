describe('Split Array function', function() {
  it('es capaz de dividir el arreglo en dos partes', function() {
    // tu código acá 
    expect( split([4,1,6,5,3,2,8,7]) ).toEqual([[4,1,6,5],[3,2,8,7]] );
  });
  it('es capaz de dividir el arreglo en dos partes', function() {
    // tu código acá 
    expect( split([4,1,6,5,3,2,8]) ).toEqual([[4,1,6,5],[3,2,8]] );
  });
  it('es capaz de dividir el arreglo en dos partes', function() {
    // tu código acá 
    expect( split([4,1,6,5,3,2]) ).toEqual([[4,1,6],[5,3,2]] );
  });
  it('es capaz de dividir el arreglo en dos partes', function() {
    // tu código acá 
    expect( split([4,1]) ).toEqual([[4],[1]] );
  });
  it('es capaz de dividir el arreglo en dos partes', function() {
    // tu código acá 
    expect( split([4,1,3]) ).toEqual([[4,1],[3]] );
  });
});


describe('Merge', function(){
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    // testeá el algoritmo
    expect( merge([1,2,3,4],[5,6,7,8]) ).toEqual([1,2,3,4,5,6,7,8] );
    
  });
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    // testeá el algoritmo
    expect( merge([1,3,5,7],[2,4,6,8]) ).toEqual([1,2,3,4,5,6,7,8] );
    
  });
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    // testeá el algoritmo
    expect( merge([2],[4]) ).toEqual([2,4] );
    
  });
});

describe('MergeSort', function(){
  it('es capaz de ordenar un arreglo desordenado', function(){
    // testeá el algoritmo
    expect(mergeSort([4,2,7,5,8,1,6,3]) ).toEqual([1,2,3,4,5,6,7,8] );
    
  });
})