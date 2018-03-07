'use strict'

var num;
var halfNum;
var arr = [];

function Init(){
    num = document.getElementsByClassName('testnum')[0].value;
    //思路：若要连续相加得到一个数，只有两种情况。
    // 1.奇数个，可整除且结果的1/2大于此奇数
    // 2.偶数个，除以一个偶数得到小数部分为0.5，结果整数部分大于偶数的1/2
    halfNum = parseInt(num/2);
    for(var i=1;i<=halfNum;i++){
        if(i%2==1&&num%i==0){
            firoutput(i,num/i);
        }else if(i%2==0&&num/i-parseInt(num/i)==0.5){
            secoutput(i,num/i)
        }
    }
    print();
}

function print() {
    var html = '';
    for(var ele in arr){
        html+=(arr[ele].join(' ')+' '+'<br>')
    }
    document.getElementsByClassName('res')[0].innerHTML = html;
}

//可拆分奇数个
function firoutput(a,b){
    if(b>(a-1)/2){
        var arr1 = [];
        for(var i=(a-1)/2;i>=1;i--){
            arr1.push(b-i)
        }
        arr1.push(b)
        for(var i=1;i<=(a-1)/2;i++){
            arr1.push(b+i);
        }
        arr.push(arr1)
    }
}
//可拆分偶数个
function secoutput(a,b) {
    if(b+0.5>=a/2){
        var arr2 = [];
        for(var i=a/2;i>=1;i--){
            arr2.push(b+0.5-i);
        }
        for(var i=1;i<=a/2;i++){
            arr2.push(b-0.5+i);
        }
        arr.push(arr2)
    }
}