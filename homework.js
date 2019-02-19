// -------------------------- Home work - 8---------------------------
// -------------------------- Попов Евгений --------------------------

// Task 1
/** 
 * @description  Создать объект, который описывает ширину и высоту
 * прямоугольника, а также может посчитать площадь фигуры:
 * const rectangle = {width:..., height:..., getSquare:...};
 */
const rectangle = {
    width: 5,
    height: 10,
    getSquare: function () {
        return this.width * this.height;
    }
};


// Task 2
/**
 * 
 * @description Создать объект, у которого будет цена товара и его скидка, а также
 * два метода: для получения цены и для расчета цены с учетом скидки:
 * const price = {
 *     price: 10,
 *     discount: '15%',
 * ... };
 * price.getPrice(); // 10
 * price.getPriceWithDiscount(); // 8.5
*/
const goods = {
        price: 10,
        discount: '15%',
        getPrice: function() {
            return this.price;
        },
        getPriceWithDiscount: function() {
            let clearDiscount = parseFloat(this.discount);
            return this.price * (100 - clearDiscount) / 100;
        }
};


// Task 3
/**
 * @description Создать объект, у которого будет поле высота и метод “увеличить
* высоту на один”. Метод должен возвращать новую высоту:
* object.height = 10;
* object.inc(); // придумать свое название для метода
* object.height; // 11;
* 
 */

const objHeight = {
    height: 0,
    increaseHeight: function() {
        this.height += 1;
        return this;
    },
    setHeight: function (value) {
        this.height = value;
        return this;
    },
    getHeight: function (value) {
        return this.height;
    }
};


// Task 4
/**
 * @description Создать объект “вычислитель”, у которого есть числовое свойство
 * “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
 * Методы можно вызывать через точку, образуя цепочку методов:
 * const numerator = {
 *     value: 1,
 *     double: function () {...},
 *     plusOne: function () {...},
 *     minusOne: function () {...},
 * }
 * numerator.double().plusOne().plusOne().minusOne();
 * numerator.value // 3
 * 
 */


const numerator = {
    value: 1,
    double: function () {
        this.value *= this.value;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
};


// Task 5
/**
 * @description Создать объект с розничной ценой и количеством продуктов. Этот
 * объект должен содержать метод для получения общей стоимости
 * всех товаров (цена * количество продуктов)
 * 
 */


const product = {
    price: 10,
    productNumber: 5,
    getTotalPrice: function () {
        return this.price * this.productNumber;
    }
};

const product2 = {
    price: 2,
    productNumber: 5
};

getTotalPrice2 = product.getTotalPrice.bind(product2);
getTotalPrice2(); // result 10

// Task 6
/**
 * @description Даны объект и функция:
 * let sizes = {width: 5, height: 10},
 * getSquare = function () {return this.width * this.height};
 * Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes
 */


let sizes = {
    width: 1,
    height: 4
};

getSquare = function () {
    return this.width * this.height;
};

let res = getSquare.call(sizes); // res = 4



// Task 7
/**
 * @description let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.
 */

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); 


// Task 8
/**
 * @description Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
 * 
 */

const multiplyMaker = {
    value: 0,
    multiply(val) {
        this.value *= val;
        return this;
    },
    getValue() {
        console.log(this);
        return this.value;
    },
    setValue(val) {
        this.value = val;
        return this;
    }
};

const multiply = multiplyMaker.setValue(2);
multiply.multiply(2);  // 4
multiply.multiply(1);  // 4
multiply.multiply(3);  // 12
multiply.multiply(10); // 120



// Task 9
/**
 * @description 
  * Реализовать модуль, который работает со строкой и имеет методы:
 * a. установить строку
 * i. если передано пустое значение, то установить пустую строку
 * ii. если передано число, число привести к строке
 * b. получить строку
 * c. получить длину строки
 * d. получить строку-перевертыш
 * Пример:
 * модуль.установитьСтроку(‘abcde’);
 * модуль.получитьСтроку(); // ‘abcde’
 * модуль.получитьДлину(); // 5
 * 
 */

const stringMaker = {
    string: '',
    getString() {
        return this.string;
    },
    setString(val) {
        if (typeof val !== 'string') {
            if (typeof val === 'undefined') {
                this.string = '';
            } else {
                this.string = val.toString();
            }
        } else {
            this.string = val;
        }
        return this;
    },
    getStringLength() {
        return this.string.length;
    },
    getReverseString() {
        return this.string.split("").reverse().join("");
    }
};

stringMaker.setString();        // empty string
stringMaker.setString(156);     // number => string
stringMaker.setString('651');   // string
stringMaker.getString();        // 651
stringMaker.getStringLength();  // 3
stringMaker.getReverseString(); // 156

// Task 10
/**
 * @description 
 * Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать,
 *  делить и возводить в степень. 
 *  Конечное значение округлить до двух знаков после 
 *  точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
 */


const calc = {
    value: 0,
    plus(val) {
        this.value += val;
        return Object.create(this);
    },
    minus(val) {
        this.value -= val;
        return Object.create(this);
    },
    multiply(val) {
        this.value *= val;
        return Object.create(this);
    },
    divide(val) {
        this.value /= val;
        return Object.create(this);
    },
    pow(val) {
        this.value = Math.pow(this.value, val);
        return Object.create(this);
    },
    getValue() {
        return Object.create(this).value.toFixed(2);
    },
    setValue(val) {
        this.value = val;
        return Object.create(this);
    }
};


const calculator = calc;

calculator.setValue(10);
calculator.plus(5);
calculator.multiply(2);
calculator.getValue();                      // 30
calculator.setValue(10).pow(2).getValue();  // 100.00
