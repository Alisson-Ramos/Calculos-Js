function antsuce()
{
	var valor1 = 0;
	var antecessor = 0;
	var sucessor = 0;


	if (document.getElementById("txtValor1").value == "")
	{
		document.getElementById("lblAntecessor").innerHTML = "Digite o valor!";
	}
	else
	{
			valor1 = document.getElementById("txtValor1").value; 

			sucessor = parseInt(valor1) + parseInt(1);
			antecessor = parseInt(valor1) - parseInt(1);

			document.getElementById("lblAntecessor").innerHTML = "o antecessor é: " + antecessor;

			document.getElementById("lblTavadandopau").innerHTML = "o sucessor é: " + sucessor;
		
	}

}

function desconto()
{
	var valor1 = 0;
	var multiplicado = 0;
	var numerox = 0;
	var desconto = 0;

	if (document.getElementById("txtValor1").value == "")
	{
		document.getElementById("lblResultado").innerHTML = "Digite o valor!";
	}
	else
	{
			valor1 = document.getElementById("txtValor1").value; 

			multiplicado = parseInt(valor1) * parseInt(6);
			numerox = parseInt(multiplicado) / parseInt(100);
			desconto = parseInt(valor1) - parseFloat(numerox)

			document.getElementById("lblResultado").innerHTML = "o valor com desconto é: " + desconto;
		
	}

}
function divsion()
{
	var valor1 = 0;
	var valor2 = 0;
	var resultado = 0;


	if (document.getElementById("txtValor1").value == "")
	{
		document.getElementById("lblResultado").innerHTML = "Digite o primeiro valor!";
	}
	else
	{
			if (document.getElementById("txtValor2").value == "") 
			{
				document.getElementById("lblResultado").innerHTML = "Digite o segundo valor!";
			}
			else
			{
			valor1 = document.getElementById("txtValor1").value; 
			valor2 = document.getElementById("txtValor2").value; 

			resultado = parseInt(valor2) / parseInt(valor1);

			document.getElementById("lblResultado").innerHTML = "A divisão entre esses numeros é: " + resultado;
		}
		
	}

}
function imc()
{
	var valor1 = 0;
	var valor2 = 0;
	var divisao = 0;
	var multiplicacao = 0;
	


	if (document.getElementById("txtValor1").value == "")
	{
		document.getElementById("lblResultado").innerHTML = "Digite o primeiro valor!";
	}
	else
	{
				if (document.getElementById("txtValor2").value == "")
		{
			document.getElementById("lblResultado").innerHTML = "Digite o segundo valor!";
		}
				else
				{
					valor1 = document.getElementById("txtValor1").value;
					valor2 = document.getElementById("txtValor2").value;  

					multiplicacao = parseFloat(valor1) * parseFloat(valor1);
					divisao = parseFloat(valor2) / parseFloat(multiplicacao);

					if (divisao < 20) 
					{
						document.getElementById("lblResultado").innerHTML = "Você está abaixo do peso";
					}
					else
					{
						if (divisao < 25)
						{
							document.getElementById("lblResultado").innerHTML = "Você está com o peso ideal";
						}
						else
						{
							if (divisao = 25)
							{
								document.getElementById("lblResultado").innerHTML = "Você está Acima do peso";
							}
							else
							{
								document.getElementById("lblResultado").innerHTML = "Você está Acima do peso";
							}
						}
					}

					

				}
	}

}
function bmw()
{
	var valor1 = 0;
	var valo2 = 0;
	var valo3 = 0;
	var divisao = 0;
	var multiplicacao = 0;
	var divisaoimposto = 0;
	var multiplicacaoimposto = 0;
	var valorfinalcarro = 0;


	if (document.getElementById("txtValor3").value == "")
	{
		document.getElementById("lblResultado").innerHTML = "Digite o valor do Carro!";
	}
	else
	{
			valor1 = document.getElementById("txtValor1").value;
			valor2 = document.getElementById("txtValor2").value;
			valor3 = document.getElementById("txtValor3").value; 

			multiplicacao = parseFloat(valor3) * parseFloat(valor1);
			divisao = parseFloat(multiplicacao) / parseFloat(100);

			multiplicacaoimposto = parseFloat(valor3) * parseFloat(valor2);
			divisaoimposto = parseFloat(multiplicacaoimposto) / parseFloat(100);

			valorfinalcarro = parseFloat(valor3) + parseFloat(divisao) + parseFloat(divisaoimposto);

			document.getElementById("lblLucro").innerHTML = "O lucro é de: " + divisao;
			document.getElementById("lblImposto").innerHTML = "O total do imposto é é de: " + divisaoimposto;
			document.getElementById("lblResultado").innerHTML = "O preço final é de: " + valorfinalcarro;	
	}

}
// Apartir daqui eu tentei diminuir o codigo//
// tem mt coisa pra diminuir nos outros//
// tem q ter uma nota boa, tá até que bunitim os codiguin//
function nota()
{
	var valor1 = 0;
	var valor2 = 0;
	var nota = 0;
	var x = 0;


	if (document.getElementById("txtValor1").value == "")
	{
		document.getElementById("lblResultado").innerHTML = "Digite a nota 1!";
	}
	else
	{
				if (document.getElementById("txtValor2").value == "")
			{
				document.getElementById("lblResultado").innerHTML = "Digite a nota 2!";
			}
			else 
				{
					valor1 = document.getElementById("txtValor1").value;
					valor2 = document.getElementById("txtValor2").value;

					nota = (parseFloat(valor1) + parseFloat(valor2 * 2)) / parseInt(3);

					if (nota >= 5)
					{
						document.getElementById("lblResultado").innerHTML = "Aprovado!!" + nota;
					}
					else
					{
						document.getElementById("lblResultado").innerHTML = "Reprovado!!" + nota;
					}
				}
	}

}
function valor2()
{
	var valor = 0;
	var segundanota = 0;
	var divisao = 0;


	if (document.getElementById("txtValor1").value == "")
	{
		document.getElementById("lblResultado").innerHTML = "Digite a nota 1!";
	}
	else
	{
		valor = document.getElementById("txtValor1").value;

		segundanota = parseFloat(15) - parseFloat(valor);
		divisao = parseFloat(segundanota) / parseFloat(2);

		document.getElementById("lblResultado").innerHTML = "Você precisará ter uma nota de, no mínimo: " + divisao;
				
	}

}
