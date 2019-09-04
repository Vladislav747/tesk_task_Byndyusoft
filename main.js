/*Напиши функцию, на вход которой приходит массив чисел. Функция возвращает сумму двух минимальных элементов массива. Например, если дан массив [4, 0, 3, 19, 492, -10, 1], то результатом будет -10, потому что два минимальных числа -10 и 0, а их сумма -10.
Напиши минимум 3 модульных теста на эту функцию.
HINT: учти, что массив может быть пустым, или без цифр или состоять из 100 млн. элементов, поэтому надо учесть разные граничные условия.

Не спешите – главный ориентир всегда – качество. */

var arr = [4, 0, 3, 19, 492, -10, 1];


function findTwoMinNumbers(arr){
      
   //Проверяем на недопустимые значения
   if(arr === null)
     throw new Error('Массив не может равняться null');
    else if(typeof(arr) == "undefined")
        throw new Error('Массив не может равняться undefined');
    else if(!arr.length)
        throw new Error('Массив не может быть пустой');
      
  //Закладываем возможность наличия текста в массиве 
  var arrNumbers = arr.filter(function(el){
    return !isNaN(+el) && el != null;});
  
  //проверяем на undefined и текст в элементах массиве
    if(!arrNumbers.length)
    throw new Error('Массив должен содержать только цифры - ваш массив либо буквы либо undefined значения');
 
  
  if(arrNumbers.length == 1){
    var sumMinNumbers = arrNumbers[0];
  }
  else
  {
     var minNumberFirst = arrNumbers[0]
     var minNumberSecond = arrNumbers[1];
  
    for(i=2; i < arrNumbers.length; i++)
    {
      if(arrNumbers[i] < minNumberFirst)
      {
        minNumberSecond = minNumberFirst < minNumberSecond ? minNumberFirst: minNumberSecond;
        minNumberFirst = arrNumbers[i];
      }
      else if (arrNumbers[i] < minNumberSecond)
      {
        minNumberSecond = arrNumbers[i];     
      }
    }
  
    var sumMinNumbers = +minNumberFirst + +minNumberSecond;

  }
 
    return sumMinNumbers;
}


