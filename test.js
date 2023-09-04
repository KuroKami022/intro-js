function solution(valor) {
    if (typeof (valor) === "number") {
      console.log("number")
    }
    if (typeof (valor) === "string") {
      console.log("string")
    }
    if (typeof (valor) === "undefined") {
      console.log("undefined")
    }
    if (typeof (valor) === "boolean") {
      console.log("boolean")
    }
  }
  solution(1)
  solution("Dieguillo")
  solution(true)