function sum(){

    let num1 = 30;
    let num2 = 50;
    return num1 + num2;
}

const add = function() {
    return 100 + 200;
};

const multi = ()=> {
    return 200 * 2;
};

// sum() 함수를 호출하여 return 값을 sumResult 변수에 저장
const sumResult = sum();
const addResult = add();
const multiResult = multi();
console.log(sumResult, addResult, multiResult);

const intKor = [] // Array()
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(3 in trees );
console.log(10 in trees);

for(let i = 0; i < trees.length; i++) {
    console.log(trees[i]);
}



const student = {이름 : "홍길동", 나이: 33, 전화:"010-11-1111"}
console.log("이름" in student);

//false 값들
let title1;
const title2 = null;
const title3 = "";
const title4 = 0;
const title5 = NaN;
const title6  = undefined;

const bYes = title1 || title2 || title3 || title4 || title5 || title6 || "우리나라";
console.log(bYes);

const nation = "대한민국"

for(let i = 0; i < nation.length; i++) {
    console.log(nation[i]);
}
