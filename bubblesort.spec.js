describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a disordered array', function(){
    expect( bubbleSort([2,4,1,5,3]) ).toEqual( [1,2,3,4,5] );
  });
  it('handles an ordered array', function(){
    expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
  });
  it('handles an inverted array', function(){
    expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
  });
  it('handles an inverted array', function(){
    expect( bubbleSort([25,12,43,101,3]) ).toEqual( [3,12,25,43,101] );
  });
});



describe('probando spies', function() {
  it('', function () {
    spyOn(window, 'swap').and.callThrough();
    const arreglo = [4,2,5,3,1] 
    // callThrough le dice al spy que utilice el método original chocolate['masticar'], 
    // mientras que callFake haría una copia.
    bubbleSort(arreglo)
    expect(window.swap.calls.count()).toEqual(7);
  });
});