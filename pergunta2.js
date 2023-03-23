function verificaFibonacci(n) {
    let a1 = 0;
    let a2 = 1;
    let a3 = a2 + a1;
    while (a3 <= n) {
      if (a3 === n) {
        return `O número ${n} pertence à sequência de fibonnaci`;
      }
      let aux = a2;
      a2 = a3;
      a3 = a3 + aux;
    }
  
    return `O número ${n} não pertence à sequência de fibonnaci`;
  }
  console.log(fibonacci(21));
  console.log(fibonacci(20));