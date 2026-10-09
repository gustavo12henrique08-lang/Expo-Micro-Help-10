/* =========================================
   VOLTAR PARA A PÁGINA ANTERIOR
========================================= */

function voltarPagina() {

    if (document.referrer) {

        history.back();

    } else {

        window.location.href = "index.html";

    }

}


/* =========================================
   SAIBA MAIS
========================================= */

function mostrarMais() {

    const conteudo =
        document.getElementById("mais-conteudo");

    const botao =
        document.getElementById("botaoSaibaMais");

    const texto =
        botao.querySelector("span");

    const seta =
        botao.querySelector(".seta");


    /* Se já estiver aberto */

    if (conteudo.classList.contains("ativo")) {

        conteudo.classList.remove("ativo");

        texto.textContent = "SAIBA MAIS";

        seta.textContent = "↓";

        document.getElementById("saiba-mais")
            .scrollIntoView({
                behavior: "smooth"
            });

    }


    /* Se estiver fechado */

    else {

        conteudo.classList.add("ativo");

        texto.textContent = "MOSTRAR MENOS";

        seta.textContent = "↑";


        setTimeout(function () {

            conteudo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

}