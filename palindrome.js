function palindrome(str){
    // console.log(str +' hey');

    let makeArr=str.split(' ');
    // console.log(makeArr);

    let arr=makeArr.filter(item=>{
        return item.split('').reverse().join('')===item;
        
    });

    console.log(arr.join(' '));
    
}


function solution(arg){
    return palindrome(arg);
}

solution('ada is going to aba');