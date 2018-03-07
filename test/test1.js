'use strict'

var result;
//实现功能
function secLenSameword(len){
    result = [];
    var s = document.getElementsByClassName('fir')[0].value;
    var t = document.getElementsByClassName('sec')[0].value;
    //首先整理数据，获得以单词长度为下标，长度相同单词放在同一数组的两个二维数组
    var res = getNewArr(s,t);
    var sA = res[0];var tA = res[1];
    //在最短二维数组中倒序遍历，判断两个二维数组相同下标是否同时存在数据
    //遍历同时存在数据的较短数组，在用join(',')得到的较长数组字符串中寻找字符串匹配
    //注：由于寻找第二长度，故在下表最大的二维数组中只要寻找到一个匹配项即结束本次匹配
    //输出结果
    document.getElementsByClassName('result1')[0].innerHTML = dataHandler(sA,tA,len)
}
//获得以单词长度为下标，长度相同单词放在同一数组的两个二维数组
function getNewArr(s,t){
    var sArr = s.split(' ');
    var tArr = t.split(' ');
    return [getSortArr(sArr),getSortArr(tArr)];
}
function getSortArr(sArr){
    var sA = [];
    for(var ele in sArr){
        if(sA[sArr[ele].length]){
            sA[sArr[ele].length].push(sArr[ele]);
        }else{
            sA[sArr[ele].length] = [];
            sA[sArr[ele].length].push(sArr[ele]);
        }
    }
    return sA;
}

//最小次数匹配一维数组中是否有相同单词
function jionWord(arr1,arr2) {
    if(arr1.length<arr2.length){
        for(var ele in arr1){
            if(arr2.join(',').match(arr1[ele])){
                result.push(arr1[ele]);
                return ;
            }
        }
    }else{
        for(var ele in arr2){
            if(arr1.join(',').match(arr2[ele])){
                result.push(arr2[ele]);
                return ;
            }
        }
    }
}

//最小次数遍历二维数组第一维度
function dataHandler(sA,tA,index){
    var arr1;
    var arr2;
    if(sA.length<tA.length){
        arr1 = sA;
        arr2 = tA;
    }else{
        arr1 = tA;
        arr2 = sA;
    }
    for(var i = arr1.length-1;i>=0;i--){
        if(arr1[i]&&arr1[i].length>0&&arr2[i]&&arr2[i].length>0){
            jionWord(arr1[i],arr2[i]);
            if(result.length>=index){
                return result = result[index-1];
            }
        }
    }
    return result = null;
}
