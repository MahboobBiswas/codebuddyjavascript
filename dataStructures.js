// level {1/2/3}
// Level 2 Question Answer

function getEvenNumbers(){
    var arr = [1,3,4,6,7,8];
    for(let i = 0; i< arr.length;i++){
        if(arr[i] % 2 === 0){
            document.write(arr[i]+ "<br />");
        }
    }
}

getEvenNumbers();