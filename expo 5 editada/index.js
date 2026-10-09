// =========================================================
// MICROHELP — JAVASCRIPT PRINCIPAL
// MENU LATERAL + SUBMENUS
// =========================================================


// =========================================================
// PEGAR OS ELEMENTOS DO MENU
// =========================================================

const menuBtn =
    document.getElementById("menuBtn");

const menuLateral =
    document.getElementById("menuLateral");

const menuOverlay =
    document.getElementById("menuOverlay");

const fecharMenu =
    document.getElementById("fecharMenu");


const menuItens =
    document.querySelectorAll(
        ".menu-item"
    );


const subopcoes =
    document.querySelectorAll(
        ".menu-subopcoes"
    );


const subopcaoItens =
    document.querySelectorAll(
        ".subopcao-item"
    );


const terceiroNivel =
    document.querySelectorAll(
        ".submenu-terceiro"
    );


const segundaColunaVazia =
    document.querySelector(
        ".segunda-coluna-vazia"
    );


const submenuVazio =
    document.querySelector(
        ".submenu-vazio"
    );


// =========================================================
// ABRIR MENU
// =========================================================

function abrirMenu() {

    if (!menuLateral) {
        return;
    }


    menuLateral.classList.add(
        "aberto"
    );


    if (menuOverlay) {

        menuOverlay.classList.add(
            "aberto"
        );

    }


    menuLateral.setAttribute(
        "aria-hidden",
        "false"
    );


    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    document.body.style.overflow =
        "hidden";

}


// =========================================================
// FECHAR MENU
// =========================================================

function fecharMenuFuncao() {

    if (!menuLateral) {
        return;
    }


    menuLateral.classList.remove(
        "aberto"
    );


    if (menuOverlay) {

        menuOverlay.classList.remove(
            "aberto"
        );

    }


    menuLateral.setAttribute(
        "aria-hidden",
        "true"
    );


    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    document.body.style.overflow =
        "";


    // =====================================================
    // RESETAR PRIMEIRO NÍVEL
    // =====================================================

    menuItens.forEach(
        function(item) {

            item.classList.remove(
                "selecionado"
            );


            item.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    // =====================================================
    // RESETAR SEGUNDO NÍVEL
    // =====================================================

    subopcoes.forEach(
        function(submenu) {

            submenu.classList.remove(
                "ativo"
            );

        }
    );


    subopcaoItens.forEach(
        function(item) {

            item.classList.remove(
                "selecionado"
            );

        }
    );


    // =====================================================
    // RESETAR TERCEIRO NÍVEL
    // =====================================================

    terceiroNivel.forEach(
        function(submenu) {

            submenu.classList.remove(
                "ativo"
            );

        }
    );


    // =====================================================
    // VOLTAR ESTADO INICIAL
    // =====================================================

    if (segundaColunaVazia) {

        segundaColunaVazia.style.display =
            "flex";

    }


    if (submenuVazio) {

        submenuVazio.style.display =
            "flex";

    }

}


// =========================================================
// BOTÃO DAS 3 LINHAS
// =========================================================

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        abrirMenu
    );

}


// =========================================================
// BOTÃO X
// =========================================================

if (fecharMenu) {

    fecharMenu.addEventListener(
        "click",
        fecharMenuFuncao
    );

}


// =========================================================
// CLICAR NO FUNDO / OVERLAY
// =========================================================

if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        fecharMenuFuncao
    );

}


// =========================================================
// PRIMEIRO NÍVEL DO MENU
// =========================================================

menuItens.forEach(
    function(item) {

        item.addEventListener(
            "click",
            function() {

                const nomeMenu =
                    item.dataset.menu;


                const subopcoesAtual =
                    document.getElementById(
                        "subopcoes-" +
                        nomeMenu
                    );


                const estavaSelecionado =
                    item.classList.contains(
                        "selecionado"
                    );


                // =============================================
                // REMOVE SELEÇÃO DOS OUTROS ITENS
                // =============================================

                menuItens.forEach(
                    function(outroItem) {

                        outroItem.classList.remove(
                            "selecionado"
                        );


                        outroItem.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );


                // =============================================
                // ESCONDE TODAS AS SUBOPÇÕES
                // =============================================

                subopcoes.forEach(
                    function(submenu) {

                        submenu.classList.remove(
                            "ativo"
                        );

                    }
                );


                // =============================================
                // ESCONDE TERCEIRO NÍVEL
                // =============================================

                terceiroNivel.forEach(
                    function(submenu) {

                        submenu.classList.remove(
                            "ativo"
                        );

                    }
                );


                // =============================================
                // REMOVE SELEÇÃO DAS SUBOPÇÕES
                // =============================================

                subopcaoItens.forEach(
                    function(outroItem) {

                        outroItem.classList.remove(
                            "selecionado"
                        );

                    }
                );


                // =============================================
                // SE CLICOU NOVAMENTE NO MESMO ITEM
                // =============================================

                if (estavaSelecionado) {

                    if (segundaColunaVazia) {

                        segundaColunaVazia.style.display =
                            "flex";

                    }


                    if (submenuVazio) {

                        submenuVazio.style.display =
                            "flex";

                    }


                    return;

                }


                // =============================================
                // SELECIONA O ITEM ATUAL
                // =============================================

                item.classList.add(
                    "selecionado"
                );


                item.setAttribute(
                    "aria-expanded",
                    "true"
                );


                // =============================================
                // ESCONDE ESTADO VAZIO DA SEGUNDA COLUNA
                // =============================================

                if (segundaColunaVazia) {

                    segundaColunaVazia.style.display =
                        "none";

                }


                // =============================================
                // MOSTRA AS SUBOPÇÕES
                // =============================================

                if (subopcoesAtual) {

                    subopcoesAtual.classList.add(
                        "ativo"
                    );

                }


                // =============================================
                // MANTÉM TERCEIRA COLUNA VAZIA
                // ATÉ O USUÁRIO ESCOLHER UMA SUBOPÇÃO
                // =============================================

                if (submenuVazio) {

                    submenuVazio.style.display =
                        "flex";

                }

            }
        );

    }
);


// =========================================================
// SEGUNDO NÍVEL DO MENU
// =========================================================

subopcaoItens.forEach(
    function(item) {

        item.addEventListener(
            "click",
            function() {

                const nomeSubmenu =
                    item.dataset.submenu;


                // =============================================
                // REMOVE SELEÇÃO ANTERIOR
                // =============================================

                subopcaoItens.forEach(
                    function(outroItem) {

                        outroItem.classList.remove(
                            "selecionado"
                        );

                    }
                );


                // =============================================
                // SELECIONA A OPÇÃO ATUAL
                // =============================================

                item.classList.add(
                    "selecionado"
                );


                // =============================================
                // ESCONDE TODOS OS CONTEÚDOS DO TERCEIRO NÍVEL
                // =============================================

                terceiroNivel.forEach(
                    function(submenu) {

                        submenu.classList.remove(
                            "ativo"
                        );

                    }
                );


                // =============================================
                // ESCONDE ESTADO VAZIO
                // =============================================

                if (submenuVazio) {

                    submenuVazio.style.display =
                        "none";

                }


                // =============================================
                // LOCALIZA O TERCEIRO NÍVEL
                // =============================================

                const submenuAtual =
                    document.getElementById(
                        "submenu-" +
                        nomeSubmenu
                    );


                // =============================================
                // MOSTRA O CONTEÚDO CORRESPONDENTE
                // =============================================

                if (submenuAtual) {

                    submenuAtual.classList.add(
                        "ativo"
                    );

                }

            }
        );

    }
);


// =========================================================
// LINKS INTERNOS DO TERCEIRO NÍVEL
// =========================================================

const linksInternos =
    document.querySelectorAll(
        '.submenu-terceiro a[href*="#"]'
    );


linksInternos.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function(event) {

                const destino =
                    link.getAttribute(
                        "href"
                    );


                // =============================================
                // SEGURANÇA
                // =============================================

                if (!destino) {
                    return;
                }


                // =============================================
                // LINK PARA OUTRA PÁGINA COM #
                // Exemplo:
                // parte1.html#apresentacao
                // =============================================

                if (
                    destino.includes(
                        ".html#"
                    )
                ) {

                    fecharMenuFuncao();

                    return;

                }


                // =============================================
                // TENTA ENCONTRAR O ELEMENTO NA PÁGINA
                // =============================================

                let elemento = null;

                try {

                    elemento =
                        document.querySelector(
                            destino
                        );

                } catch (erro) {

                    return;

                }


                // =============================================
                // SE ENCONTROU, FAZ ROLAGEM SUAVE
                // =============================================

                if (elemento) {

                    event.preventDefault();


                    fecharMenuFuncao();


                    setTimeout(
                        function() {

                            elemento.scrollIntoView(
                                {
                                    behavior:
                                        "smooth",

                                    block:
                                        "center"
                                }
                            );

                        },
                        200
                    );

                }

            }
        );

    }
);


// =========================================================
// ESC FECHA O MENU
// =========================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            fecharMenuFuncao();

        }

    }
);


// =========================================================
// REDIMENSIONAMENTO DA JANELA
// =========================================================

window.addEventListener(
    "resize",
    function() {

        if (
            menuLateral &&
            !menuLateral.classList.contains(
                "aberto"
            )
        ) {

            document.body.style.overflow =
                "";

        }

    }
);