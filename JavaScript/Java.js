var saldo = 100.5; //Variavel Global
var nomeUsuario;
// usuario();
let buttonloginsubmit = document.querySelector("#buttonSubmit");
buttonloginsubmit.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  nomeUsuario = document.querySelector("#usuario").value;
  const senha = document.querySelector("#senha").value;

  if (senha === senha) {
    alert(
      "Bem-vindo " +
        nomeUsuario +
        ", é um prazer ter você por aqui!! Redirecionando para o menu..."
    );
    window.location = "menu.html";
  } else {
    alert("Usuário ou senha incorreto (Insira a senha 3589)");
  }
}

function inicio() {
  var escolha = parseInt(
    prompt(
      "Selecione uma opção 1.) Saldo  2.) Extrato  3.) Saque  4.) Depósito  5.) Transferência  6.) Sair"
    )
  );

  switch (escolha) {
    case 1:
      senha();
      ver_saldo();
      break;

    case 2:
      senha();
      extrato();
      break;

    case 3:
      senha();
      fazer_saque();
      break;

    case 4:
      senha();
      fazer_deposito();
      break;

    case 5:
      senha();
      transferencia();
      break;

    case 6:
      sair();
      break;

    default:
      erro();
      break;
  }
}

function ver_saldo() {
  alert("Seu saldo atual é: " + saldo);
  inicio();
}

function extrato() {
  var saldo_atual = saldo;
  var compras = [
    { descricao: "Netflix Mensal", valor: -55 },
    { descricao: "Recarga Claro Plano", valor: -70 },
    { descricao: "Depósito", valor: 500 },
  ];

  alert("== Extrato ==");
  for (var i = 0; i < compras.length; i++) {
    var compra = compras[i];
    saldo_atual += compra.valor;
    alert(compra.descricao + ": " + compra.valor);
  }
  alert("Saldo Atual: " + saldo_atual);
}

function fazer_saque() {
  var saque = parseFloat(prompt("Qual o valor para saque?"));

  if (isNaN(saque) || saque === "") {
    alert("Por favor, informe um número.");
    fazer_saque();
  } else if (saldo - saque <= 0) {
    alert("Operação não autorizada. Saldo insuficiente.");
  } else {
    saldo -= saque;
    //saldo = saldo - saque;
    ver_saldo();
  }
}

function fazer_deposito() {
  var deposito = parseFloat(prompt("Qual o valor para depósito?"));

  if (isNaN(deposito) || deposito === "") {
    alert("Por favor, informe um número válido.");
    fazer_deposito();
  } else if (deposito <= 0) {
    alert("Operação não autorizada. Valor de depósito inválido.");
    fazer_deposito();
  } else {
    saldo += deposito;
    ver_saldo();
  }
}

function transferencia() {
  var numero_conta = prompt("Informe o número da conta (apenas números):");
  var valor_transferencia = parseFloat(
    prompt("Informe o valor da transferência:")
  );

  // Verificar se o número da conta é um número válido
  if (!isNaN(numero_conta) && numero_conta !== "") {
    numero_conta = parseFloat(numero_conta); // Converter para número

    // Verificar se o valor da transferência é um número válido
    if (!isNaN(valor_transferencia) && valor_transferencia > 0) {
      // Verificar se há saldo suficiente para a transferência
      if (valor_transferencia <= saldo) {
        saldo -= valor_transferencia; // Deduzir o valor da transferência do saldo
        alert("Transferência bem-sucedida para a conta " + numero_conta);
      } else {
        alert("Operação não autorizada. Saldo insuficiente.");
      }
    } else {
      alert("Valor de transferência inválido. Informe um número válido.");
    }
  } else {
    alert("Número de conta inválido. Informe um número de conta válido.");
  }
}

function senha() {
  var senhaCorreta = 3589;
  var senhaDigitada;

  do {
    senhaDigitada = parseInt(prompt("Digite sua senha"));

    if (senhaDigitada === senhaCorreta) {
      return;
    } else {
      alert("Senha errada, digite novamente.");
    }
  } while (true);
}

function erro() {
  alert("Por favor, informe um número entre 1 e 4.");
  inicio();
}

function sair() {
  var confirma = confirm("Você deseja sair?");
  if (confirma) {
    alert(nomeUsuario + ", foi um prazer ter você por aqui");
    window.close();
  }
}

// inicio();
