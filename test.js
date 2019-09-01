describe('findTwoMinNumbers', function() {
 
  it('Функция должна выполнять поставленную задачу ', function() {
    findTwoMinNumbers([4, 0, 3, 19, 492, -10, 1]);
    assert.equal(findTwoMinNumbers([4, 0, 3, 19, 492, -10, 1]), -10);
  });  

  it('Функция должна показывать что массив пустой если он пустой ', function() {
    findTwoMinNumbers([]);
    assert.equal(findTwoMinNumbers([]), 'Массив пуст');
  });  
  
  it('Функция должна корректно считать сумму если минимальное значение находится в типе строка и его можно перевести в число ', function() {
    findTwoMinNumbers(["1",0,"-1"]);
    assert.equal(findTwoMinNumbers(["1",0,"-1"]), -1);    
  });


  it('Функция должна корректно считать если в массиве 1 элемент', function() {
    findTwoMinNumbers([5]);
    assert.equal(findTwoMinNumbers([5]), 5);    
  });


  it('Функция должна способна обработать 100 миллионов элементов', function(done) {
     var arrManyElements = [];
    for(var i = 0; i < 100000000; i++){
      arrManyElements.push(i);
    }        
    assert.equal(findTwoMinNumbers(arrManyElements), 1); 
    //Это требуется чтобы успеть создать массив из 100 миллионов элементов и обработать его
    this.timeout(100000);
    done();
  });
  
});
