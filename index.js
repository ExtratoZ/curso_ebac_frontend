$('document').ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#tel').mask('(00) 0 0000-0000')

    $('form').validate({
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
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }
    })
})