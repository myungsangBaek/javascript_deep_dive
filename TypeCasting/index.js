//09-01
var x = 10;

//명시적 타입 변환
//숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

//x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); //number 10

//09-02
var x = 10;

//암묵적 타입 변환
//문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.

var str = x + "";
console.log(typeof str, str); //string 10

// x변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); //number 10

//09-03
//피연산자가 모두 문자열이어야 하는 문맥
"10" + 2; // -> '102'

//피연산자가 모두 숫자 타입이어야 하는 문맥
5 * "10"; // -> 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0; //  -> true
if (1) {
}

//09-14
// 1. String 생성사 함수를 new 연산자 없이 호출하는 방법

String(1); // -> '1'
String("true"); // -> 'true'

//2. Object.prototype.toString 메서드를 사용하는 방법

(1).toString(); // -> '1'
true.toString(); // -> 'true'

//3. 문자열 연결 연산자를 이용하는 방법
1 + ""; // -> '1'
true + ""; // -> 'true

//09-15
//1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number("0"); //-> 0

//2. parseInt, parseFloat 함수를 사용하는 방법 (문자열만 변환 가능)
parseInt("0"); //-> 0
parseFloat("10.53"); // -> 10.53

//3. + 단항 산술 연산자를 이용하는 방법
+"0"; // -> 0
+"-1"; // -> -1

+true; // -> 1
+false; // -> 0

//4. * 산술 연산자를 이용하는 방법
"0" * 1; // ->0
true * 1; // ->1

//09-16
//1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
Boolean("x"); // -> true
Boolean(""); // -> false

Boolean(null); // ->false
Boolean(undefined); // ->false

Boolean({}); // -> true
Boolean([]); // -> true

//2. !부정 논리 연산자를 두 번 사용하는 방법
!!"x"; // ->true
!!""; // ->false
!!"false"; // ->true

!!0; // -> false
!!1; // ->true
!!Infinity; // -> true

!!null; // ->false

!!{}; // -> true
!![]; // -> true
