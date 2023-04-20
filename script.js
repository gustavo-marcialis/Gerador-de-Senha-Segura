const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#";
const senhaInput = document.getElementById("senha");
const gerarBtn = document.getElementById("gerar");
const copiarBtn = document.getElementById("copiar");

function gerarSenha() {
	let senha = "";
	for (let i = 0; i < 16; i++) {
		senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
	}
	senhaInput.value = senha;
}

function copiarSenha() {
	senhaInput.select();
	document.execCommand("copy");

}

gerarBtn.addEventListener("click", gerarSenha);
copiarBtn.addEventListener("click", copiarSenha);
