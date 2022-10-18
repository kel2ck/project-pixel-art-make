// Select color input
// Select size input
// Initialize global variables
var height, width, color;



// When size is submitted by the user, call makeGrid() to make the Grid 
    // Based on the dimension given
    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        height = $('#inputHeight').val();
        width = $('#inputWidth').val();
        makeGrid(height,width);
        console.log('Height: ' + height + ' and width: ' + width);
    })
    
function makeGrid(x, y) {
    $('tr').remove();

    // Build the table cells using nested for loops
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }

    }

    // add color to cell
    $('td').click(function addcolor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
