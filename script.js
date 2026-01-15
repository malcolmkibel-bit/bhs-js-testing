function endOther(str1, str2) {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    
    for (let i=0; i < str1.length; i++) {
        if (str1.substring(1,i) === str2 || str1.substring(i, str1.length) === str2) {
            return true;
        }
    }
    for (let i=0; i < str2.length; i++) {
        if (str2.substring(1,i) === str1 || str2.substring(i, str2.length) === str1) {
            return true;
        }
    }
    return false;
}

function starOut(str) {
    let ans = "";
    for (let i=0;i<str.length;i++) {
        if (str[i] != "*" && str[i-1] != "*" && str[i+1] != "*") {
            ans += str[i];
        }
    }
    return ans;
}

function getSandwich(str1) {
   return lastIndexOF(str1.length)
}
  
   

function canBalance(arr) {
   
        
}


function countClumps(arr) {

}
function sameEnds(str) {

}