//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// we want to remove the first and last characters in the string, we can use slice to remove the
// first character and -1 to remove the last one since a negative number will remove x amount of
// characters from the back as opposed to the front

function removeChar(str){
  return str.slice(1, -1);
}
