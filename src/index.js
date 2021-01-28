// complete the function
function palindrom(str) {
  // code goes here
   // console.log(str +' hey');

   let makeArr=str.split(' ');
   // console.log(makeArr);

   let arr=makeArr.filter(item=>{
       return item.split('').reverse().join('')===item;
       
   });

  //  console.log(arr.join(' '));

  return arr.join(' ');
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
