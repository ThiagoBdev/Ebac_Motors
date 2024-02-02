$(document).ready(function() {
    $("#carousel-imagens").slick({ 
        autoplay: true
    });

    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();  
    })


    $("#telefone").mask("(00) 00000-0000",{
        placeholder: '(00) 00000-0000'
    })

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            },
            mensagem: {
                required: false
            },
        },
        messages: {
            nome: 'Por favor insira seu nome'
        },
        SubmitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfinvalids();
            if (camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $("#contato");

        const nomeVeiculo = $(this).parent().find("h3").text();

        $("#veiculo-interesse").val(nomeVeiculo);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})