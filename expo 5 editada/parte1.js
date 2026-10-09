
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
   BOTÕES
========================================= */

function acaoBotao(evento, acao) {

    evento.preventDefault();

    /*
        Os botões estão preparados para receber
        posteriormente os links reais do projeto.

        Por enquanto, mostramos uma mensagem para
        deixar claro qual ação foi selecionada.
    */

    alert(
        acao +
        "\n\nEsta ação poderá ser conectada à página ou ao assistente do Micro-Help."
    );

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


    /* =====================================
       SE JÁ ESTIVER ABERTO
    ===================================== */

    if (conteudo.classList.contains("ativo")) {

        conteudo.classList.remove("ativo");

        texto.textContent = "SAIBA MAIS";

        seta.textContent = "↓";


        document.getElementById("saiba-mais")
            .scrollIntoView({

                behavior: "smooth"

            });

    }


    /* =====================================
       SE ESTIVER FECHADO
    ===================================== */

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

