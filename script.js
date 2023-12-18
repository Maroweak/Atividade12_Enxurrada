document.addEventListener('DOMContentLoaded', function () {
    
    var header = document.querySelector('#site-header');
    var tituloH1 = document.createElement('h1');
    tituloH1.textContent = 'Integração Html com Javascript com textos apenas como exemplos';
    header.appendChild(tituloH1);

   
    var main = document.querySelector('#site-main');

    
    var div1 = document.createElement('div');
    div1.classList.add('content-div');
    var tituloH2_1 = document.createElement('h2');
    var paragrafo1 = document.createElement('p');

    tituloH2_1.textContent = 'HTML';
    paragrafo1.textContent = 'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.';

    div1.appendChild(tituloH2_1);
    div1.appendChild(paragrafo1);

  
    var div2 = document.createElement('div');
    div2.classList.add('content-div');
    var tituloH2_2 = document.createElement('h2');
    var paragrafo2 = document.createElement('p');

    tituloH2_2.textContent = 'Javascript';
    paragrafo2.textContent = 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.';

    div2.appendChild(tituloH2_2);
    div2.appendChild(paragrafo2);

   
    main.appendChild(div1);
    main.appendChild(div2);

    var footer = document.querySelector('#site-footer');
    var textoFooter = document.createElement('p');
    textoFooter.textContent = '© 2023 Site com JavaScript. Todos os direitos reservados.';
    footer.appendChild(textoFooter);
});
