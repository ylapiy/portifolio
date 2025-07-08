var temaClaro = false
let timer = null;

document.getElementById('inversor').addEventListener('click', () => {
        document.body.classList.toggle('tema-claro-queima-olhos')
        const lua =  document.getElementById('lua')
        const sol = document.getElementById('sol')

        if(temaClaro == false){
            
            temaClaro = true
            lua.style.display = "none"
            lua.style.visibility = "hidden"
            sol.style.display = "block"
            sol.style.visibility = "visible"

        }else{

            temaClaro = false
            sol.style.display = "none"
            sol.style.visibility = "hidden"
            lua.style.display = "block"
            lua.style.visibility = "visible"
        }


}) 
document.getElementById('butaoSobreMim').addEventListener('click', () => {
        document.querySelector('.MenuProjetos').style.visibility = 'hidden';
        document.querySelector('.MenuProjetos').style.visibility = 'none'
        document.querySelector('.listaProjetos').style.display = 'none';

        document.querySelectorAll('.divisoesMenuInicial').forEach(Elemento => {Elemento.style.visibility = 'visible'});
        document.querySelectorAll('.divisoesMenuInicial').forEach(Elemento => {Elemento.style.display = 'flex'});
       
        document.getElementById('titulo').textContent = ""
        escreverTextoProgresso('titulo','YGOR JIVAGO LEAL FÉLIX')
        


})
document.getElementById('butaoProjetos').addEventListener('click', () => {
        document.querySelectorAll('.divisoesMenuInicial').forEach(Elemento => {Elemento.style.visibility = 'hidden'});
        document.querySelectorAll('.divisoesMenuInicial').forEach(Elemento => {Elemento.style.display = 'none'});
       
        document.querySelector('.MenuProjetos').style.visibility = 'visible';
        document.querySelector('.MenuProjetos').style.display = 'block'
        document.querySelector('.listaProjetos').style.display = 'flex';
        
        document.getElementById('titulo').textContent = ""
        escreverTextoProgresso('titulo','PROJETOS')

})
document.getElementById('email').addEventListener('click', () => {
    setTimeout(()=>{
    document.getElementById('formemai').mensagem.value = "";
    }, 100)
})
window.addEventListener('load', () => {
        document.getElementById('titulo').textContent = ""
        escreverTextoProgresso('titulo','YGOR JIVAGO LEAL FÉLIX')
        APIgitHub();

        
});

document.getElementById('baixar').addEventListener('click', () =>{
    const link = document.getElementById('baixar')
    link.href = "YgorJivago_LealFélix.pdf";
})

async function APIgitHub(){
    
    const username = "ylapiy"; 
    const lista = document.getElementById("listaProjetos");

    await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)

      .then(response => response.json())
      .then(repos => {
        lista.innerHTML = ""; 
        repos.forEach(repo => {
          const item = document.createElement("li");
          item.classList.add("listaProjetos-li")
          const link = document.createElement("a");
          link.classList.add("listaProjetos-a")
          const sobre = document.createElement("p");
          sobre.classList.add("listaProjetos-p")
          link.href = repo.html_url;
          link.textContent = repo.name;
          link.target = "_blank"; 
          sobre.textContent = repo.language || "Outros"
          item.appendChild(link);
          lista.appendChild(item);
          item.appendChild(sobre);

          item.addEventListener('mouseenter', () => {
          const descricao = document.getElementById("descricaoRepo");
          descricao.textContent = repo.description 
          descricao.style.display = 'block';
    });

          item.addEventListener('mouseleave', () => {
        const descricao = document.getElementById("descricaoRepo");
        descricao.style.display = 'none';
    });

        });
      })
      .catch(error => {
        console.error(error);
      });
}

function escreverTextoProgresso(elementoId, texto, velocidade = 80) {
    const elemento = document.getElementById(elementoId);
    let i = 0;

    if (timer) {
        clearTimeout(timer);
    }

    elemento.textContent = ''; 

    function digitar() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            timer = setTimeout(digitar, velocidade);
        }
    }

    digitar();
}