
const submitMessage = () =>{

    let nome = document.getElementById('nome').value;    
    let telefone = document.getElementById('telefone').value;    
    let assunto = document.getElementById('assunto').value;    
    let mensagem = document.getElementById('mensagem').value; 

    sendEmail(nome, telefone, assunto, mensagem)
    alert(nome + ' Sua mensagem foi enviada!')
}

const sendEmail = (nome, telefone, assunto, mensagem) => {
    var params = {
        nome: nome,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem
    }
    emailjs.send('service_italian_bistro', 'template_2fl2oeo', params)
    .then(function(response){
        console.log('sucess!!', response.status, response.text);
    },  function (error){
            console.log('ERROR!!', error)
        
    })
}

