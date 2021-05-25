// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

function evenLast(numbers) {
  if(numbers.length === 0) return 0;

  return numbers.reduce((acc, el, num) => {
    if(num % 2 === 0) acc += el;
    if(num === numbers.length - 1) return acc * el;

    return acc;
  }, 0)
}
