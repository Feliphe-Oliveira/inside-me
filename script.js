document.getElementById('btnInsi').addEventListener('click',()=>{
    const cod = 'para'
    if(document.getElementById('senha').value.toUpperCase()==cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    } else if(document.getElementById('senha').value == ''){
        alert('Prencha os dados solicitados')
    } else(alert('Senha incorreta'))
})