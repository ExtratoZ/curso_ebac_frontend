$(document).ready(function() {
    $('header button').click(function() {
        $('form').fadeIn();
    })

    $('#cancelar').click(function() {
        $('form').fadeOut();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<ul></ul>');
        $(`<li style="display: none;">${tarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('div .popup');
        $('li').fadeIn();
        $('#tarefa').val('');

        $('ul').on('click', 'li', function() {
            $(this).addClass('line_through');
        })
    })
}) 