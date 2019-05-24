const size = 4;
const min = 0;
const max = size - 1;
var score = 0;

$(document).ready(function () {
    startGame();
    $(document).keydown(function (e) {
        e.preventDefault();
        switch (e.keyCode) {
            case 37:
            case 49:
                left();
                break;
            case 38:
            case 51:
                up();
                break;
            case 39:
            case 50:
                right();
                break;
            case 40:
            case 52:
                down();
                break;
        }
    });
});

function startGame() {
    var html1 = '<table border="1">';
    for (var row = 0; row < size; row++) {
        html1 += '<tr>';
        for (var col = 0; col < size; col++) {
            var id = row + "" + col;
            html1 += '<td align="center" valign="center" height="40" width="40" id="' + id + '"></td>';
        }
        html1 += '</tr>';
    }
    html1 += '</table>';
    $('#canvas').html(html1);

    while (true) {
        var cell1 = generateRandomIds();
        var cell2 = generateRandomIds();
        if (cell1 !== cell2) {
            $('#' + cell1).html(generate2or4());
            $('#' + cell2).html(generate2or4());
            break;
        }
    }
    $('#score').html(0);

}



// generate random id for table cells
function generateRandomIds() {
    return (Math.floor(Math.random() * (max - min + 1)) + min) + "" + (Math.floor(Math.random() * (max - min + 1)) + min);
}
// generate 2 or 4 to populate in the grid
function generate2or4() {
    return Math.random() < 0.8 ? 2 : 4;
}

function valuesMoved() {
    $('#' + getEmptyId()).html(generate2or4());
    var isFilled = true;
    for (var i = min; i <= max; i++) {
        for (var j = min; j <= max; j++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML == "") {
                isFilled = false;
                break;
            }
        }
    }
    if (isFilled) {
        if (isGameOver()) {
            alert("Game Over");
        }
    }

}

function isGameOver() {
    var isOver = true;

    for (var row = min; row <= max - 1; row++) {
        for (var col = min; col <= max - 1; col++) {
            origVal = parseInt($('#' + (row + "" + col)).html());
            nextVal = parseInt($('#' + (row + "" + (col + 1))).html());
            if (origVal == nextVal) {
                isOver = false;
                break;
            }
        }
    }

    for (var col = min; col <= max; col++) {
        for (var row = min; row <= (max - 1); row++) {
            origVal = parseInt($('#' + (row + "" + col)).html());
            nextVal = parseInt($('#' + ((row+1) + "" + col )).html());
            if (origVal == nextVal) {
                isOver = false;
                break;
            }
        }
    }
    return isOver;
}

function getEmptyId() {
    var emptyIds = [];
    for (i = min; i <= max; i++) {
        for (j = min; j <= max; j++) {
            var id = i + "" + j;
            if ($('#' + id).html() == "") {
                emptyIds.push(id);
            }
        }
    }
    return emptyIds[Math.floor(Math.random() * emptyIds.length)];
}