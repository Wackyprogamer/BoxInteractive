const $gameBoardDiv = $('#gameBoard');

for (let i = 1; i <= 16; i++) {

    let $newDiv = $('<div></div>');

    $newDiv.addClass(`box${i}`);
    $gameBoardDiv.append($newDiv)

    $(`.box${i}`).click(function() {
        if ($(this).css('background-color') === 'rgb(51, 51, 51)')  {
            $(this).css('background-color', '#999');
        } else {
            $(this).css('background-color', '#333')
        }
    });
}


