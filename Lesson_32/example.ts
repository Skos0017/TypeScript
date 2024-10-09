// Регулярные выражения способ Работы со стоками на основе шаблонизации. 
// const regex = /hello/i;//Красное - патерн регулярки, i - Регистро не зависемый поиск
// console.log(regex.test("Hello world!"));

// const pattern = 'hello'
// const flag = 'i';

// const regex = new RegExp(pattern,flag);
// console.log(regex.test('hello, worold!'));

// const regex = /frend/i;
// const result = regex.exec('hello my Frend');
// console.log(result)

//g - Поиск глобально по страке

// const regex: RegExp = /Hello/gi;
// const str: string = 'hello worold';
// const mat = str.match(regex);
// console.log(mat)

// replace - Заменяет Старое на новое  первое слово 
// const str: string = 'Hello world!';
// const regex: RegExp = /hello/i;
// const newStr = str.replace(regex, 'Hi');
// console.log(newStr)

/*
            СИМВОЛЫ
. - любой одиночный символ кроме новой строки
\d - любая цифра [0 - 9]
\D - любой символ кроме цифры
\w - любой алфавитно-цифровой символ
\W - любой символ кроме алфавитно-цифрового
\s - любой пробельный символ
\S - любой символ кроме пробельного

        КВАНТИФИКАТОРЫ

* - 0 или более вхождений
+ - 1 или более вхождений
? - 0 или 1 вхождение
{n} - конкретное количество вхождений n
{n,} - количество вхождений от n и более
{n,m} - количество вхождений от n до m

            ЯКОРЯ
^ - начало строки
$ - конец строки
\b - граница слова
\B - неграница слова

        ГРУППИРОВКА И АЛЬТЕРНАТИВА
() - группировка
| - альтернатива
*/
// let str: string = "hello hello   hello    hello     hello     hello";
// const regex: RegExp = /\s+/;
// const parst = str.split(regex);
// console.log(parst)

// const companiName: string = 'Valeriq & Anatoli CO';
// const regex:RegExp = /\s\W\s/;
// const pars = companiName.split(regex);
// console.log(pars)

// const emailRegex: RegExp = /^[^\s@]+@[\s@]+\.[^\s@]+$/;
// console.log(emailRegex.test('exemple@mail.ru'))
// console.log(emailRegex.test('exemplemail.ru'))


// const text: string = ' hello, Hello ,Hello ,Hello ,Hello ,Hello ,';
// const world = text.match(/\b\w+\b/g);
// console.log(world)

// const text: string = "Мой номер телефона 8-800-555-35-35";
// const newText = text.replace(/\d/g , '*');
// console.log(newText)

const regExp: RegExp = /\u{1F600}/u;
console.log(regExp.test("😀"))