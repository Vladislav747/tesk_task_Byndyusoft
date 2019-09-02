/*Напиши функцию, на вход которой приходит массив чисел. Функция возвращает сумму двух минимальных элементов массива. Например, если дан массив [4, 0, 3, 19, 492, -10, 1], то результатом будет -10, потому что два минимальных числа -10 и 0, а их сумма -10.
Напиши минимум 3 модульных теста на эту функцию.
HINT: учти, что массив может быть пустым, или без цифр или состоять из 100 млн. элементов, поэтому надо учесть разные граничные условия.

Не спешите – главный ориентир всегда – качество. */

var arr = [4, 0, 3, 19, 492, -10, 1];

function sortArrEl(a,b){
    if(!isNaN(+a) && !isNaN(+b)){
        return +a > +b ? 1 : -1;} 
    else if (!isNaN(+a)){
        return -1;
    }
    else if(!isNaN(+b)){
        return 1;}
    else{
        return 1;
    }
}

function findTwoMinNumbers(arr){
    //Закладываем возможность наличия текста в массиве 
    var arrNumbers = arr.filter(function(el){
        return !isNaN(+el);}).sort(sortArrEl);
    if(!arrNumbers.length){
        throw new Error('Массив пуст');
    }
    //Если в массиве единственный элемент возвращаем его
    var sumMinNumbers = arrNumbers.length == 1 ? +arrNumbers[0] : +arrNumbers[0] + +arrNumbers[1];
        return sumMinNumbers;
}


