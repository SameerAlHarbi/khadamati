const add = (num1: number, num2: number, num3?: number) => {
  console.log(num1 + num2 + num3 || 0);
};

add(1, 2);
