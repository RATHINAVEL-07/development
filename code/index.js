// /palindrome recursively 
function isPalindrome(str){
  if (str.length <=1){
    return true;
    
  }

if (str[0]!==str[str.length-1]){
  return false;
}
  
  return isPalindrome(str.slice(1,-1));
}

const string1="12321";
const string2="asbsa";
const string3="hello";
console.log(`${string1} is a plaindorme:${isPalindrome(string1)}`);
console.log(`${string2} is a plaindorme:${isPalindrome(string2)}`);
console.log(`${string3} is a plaindorme:${isPalindrome(string3)}`);
