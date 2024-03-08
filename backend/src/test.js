const EMPTY_ARR = new Array(3).fill(1);

// 2차원 배열 쉽게 만드는 방법
const arr = Array.from({ length: 3 }, () => EMPTY_ARR);

const a = [1, 2, 3];

a.map((b, index) => {
  console.log(index);
  console.log(b);
});
