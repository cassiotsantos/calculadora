/* 
Instruções para criar a calculadora:

1 - Receber dados : tipo de operação e valor
2 - executar a operação usandos valores de acordo com o tipo de operação
3 - retornar o resultado da operação
*/

function calculadora() {
  const typeOperation = Number(
    prompt(
      "Escolha o tipo de operação: \n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Multiplicação (x)\n 4 - Divisão (/)"
    )
  );
  console.log(typeOperation);

  if (!typeOperation || typeOperation >= 5) {
    alert("Não é uma opção válida!");
    calculadora();
  } else {
    let valor1 = Number(prompt("Digite o primeiro valor:"));
    let valor2 = Number(prompt("Digite o segundo valor:"));
    let resultado;

    if (!valor1 || !valor2) {
      alert("Não é um valor válido");
      calculadora();
    } else {
      function soma() {
        resultado = valor1 + valor2;
        alert(`${valor1} + ${valor2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = valor1 - valor2;
        alert(`${valor1} - ${valor2} = ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = valor1 * valor2;
        alert(`${valor1} x ${valor2} = ${resultado}`);
        novaOperacao();
      }

      function divisao() {
        resultado = valor1 / valor2;
        alert(`${valor1} / ${valor2} = ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let option = Number(
          prompt(`Quer fazer outra operação?:\n 1 - Sim\n 2 - Não`)
        );

        if (option == 1) {
          calculadora();
        } else {
          alert("Até mais!");
        }
      }
    }

    if (typeOperation == 1) {
      soma();
    } else if (typeOperation == 2) {
      subtracao();
    } else if (typeOperation == 3) {
      multiplicacao();
    } else if (typeOperation == 4) {
      divisao();
    } else {
      alert("Valor inválido");
    }
  }
}

calculadora();
