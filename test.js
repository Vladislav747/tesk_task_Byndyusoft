describe('findTwoMinNumbers', function() {
 
  it('Функция должна выполнять поставленную задачу ', function() {
    findTwoMinNumbers([4, 0, 3, 19, 492, -10, 1]);
    assert.equal(findTwoMinNumbers([4, 0, 3, 19, 492, -10, 1]), -10);
  });  
  
  it('Функция должна корректно считать сумму если минимальное значение находится в типе строка и его можно перевести в число ', function() {
    findTwoMinNumbers(["1",0,"-1"]);
    assert.equal(findTwoMinNumbers(["1",0,"-1"]), -1);    
  });
  
  
   it('Функция должна корректно считать если в массиве и текст и число и числов типе строка пример массива [0, 1, 12, 43, 45, 123, "12314", "фап", "asdasd", "adasd"]', function() {
    var arrVarious = [1,12,43,'фап', 123, 45, "asdasd", "adasd", "12314", 0];
    assert.equal(findTwoMinNumbers(arrVarious), 1);    
  });


  it('Функция должна корректно считать если в массиве 1 элемент', function() {
    findTwoMinNumbers([5]);
    assert.equal(findTwoMinNumbers([5]), 5);    
  });


  it('Функция должна способна обработать 100 миллионов элементов', function() {
     var arrManyElements = [];
    for(var i = 0; i < 1000000; i++){
      arrManyElements.push(i);
    }
        
    assert.equal(findTwoMinNumbers(arrManyElements), 1);    
  });
  
  it('Массив не должен быть пуст иначе выдается исключение массив пуст', function() {
    expect(() => findTwoMinNumbers([])).to.throw(('Массив не может быть пустой'));    
  });
  
   it('Массив не должен равняться undefined иначе выдается исключение undefined ', function() {
    expect(() => findTwoMinNumbers(undefined)).to.throw(('Массив не может равняться undefined'));    
  });
   it('Массив не должен равняться null иначе выдается исключение null', function() {
    expect(() => findTwoMinNumbers(null)).to.throw(('Массив не может равняться null'));    
  });
   it('Функция не должна содержать undefined иначе выдается исключение undefined ', function() {
    expect(() => findTwoMinNumbers(["undefined", "undefined"])).to.throw(('Массив должен содержать только цифры - ваш массив либо буквы либо undefined значения'));    
  });
  
});
