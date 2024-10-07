var email , nome

function addValor(){
  nome = document.getElementById('name').value
  email = document.getElementById('email').value

  if (nome != '' && email != '') {
    document.write('Seu email : ' + email + ' e seu nome : ' + nome)
  } else{
    alert('Preencha todos os campos!')
  }
}