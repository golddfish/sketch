var _gridSize = 64;
var _colorOption = 'white';
$(function(){
    createGrid(_gridSize);
});

function registerEvents() {
    $('.grid-cell').on("mouseenter",function(){
        colorCell($(this));
    });
    // resize click event
    $("#resize").on("click",function(){
        _gridSize = prompt('Fill in your desired amount of blocks ;)',_gridSize);
        createGrid();
    })

    $("input[name='color_type']").on('change',function() {
        _colorOption = $(this).val();
    })
}

function createGrid() {
    //clean
    var container = $('#grid-container');
    container.empty();

    var blockAmount = _gridSize * _gridSize;
    var blockWidth = calculateWidth();

    for(i=0;i< blockAmount;i++) {
            var block = $('<div></div>').addClass('grid-cell');
            block.css('width',blockWidth);
            block.css('height',blockWidth);
            container.append(block);
    }
    registerEvents();
}

function colorCell(elem) {
    var color;
    if(_colorOption == 'white') {
        /* save hover count to element and increase opacity */
        var count = elem.data('hover_amount');
        if(count == undefined) {
            count = 1;
        }
        else if(count < 5) {
            count +=1;
        }

        opacity = (5 + count) / 10;
        elem.data('hover_amount',count);
        color = 'rgba(255,255,255,'+ opacity + ')';
    } else {
        var green = Math.floor(Math.random() * 255) + 1;
        var red = Math.floor(Math.random() * 255) + 1;
        var blue = Math.floor(Math.random() * 255) + 1;
        color = "rgb(" + green + ","  + red + ","  + blue + ")";
    }
    elem.css('background-color',color);
}

function calculateWidth() {
    var gridWidth = 640;
    var width = gridWidth / _gridSize;
    return width;
}

