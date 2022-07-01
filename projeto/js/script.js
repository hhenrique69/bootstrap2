function validarFormulario(){
	
	let nome = document.getElementById("nome-completo").value
		
	let email = document.getElementById("email").value

	let estado = document.getElementById("estado").value
	
	let cidade = document.getElementById("cidade").value
				
	let telefone = document.getElementById("telefone").value
	
	if(email==""){
		alert("renvia novamente apreasa"
		)
	}{
		
	if(telefone) == "" || telefone.length <8){
		alert("o campo telefone esta vazio")
	
	}
	console.log(email)
	console.log(nome)
	console.log(telefone)
	console.log(cidade)
	console.log(estado)
	

}