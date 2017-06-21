function fibonacciMemo(num, memoria = {}) {
  if (memoria[num]) return memoria[num]
  if (num == 1) return 0
  if (num == 2) return 1
  return memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num - 2, memoria)
}

function fibonacciRecursivo(num) {
  if (num == 1) return 0
  if (num == 2) return 1
  return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2)
}