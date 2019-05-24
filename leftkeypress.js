function left() {
    isMoved = false;
    changedIds = [];
    for (var i = min; i <= max; i++) {
        for (var j = min; j <= max; j++) {
            if ($('#' + (i + "" + j)).html() != "") {
                moveLeft(i,j);
            }
        }
    }
    if (isMoved) {
        valuesMoved();
    }
    $('#score').html(score);
}

function moveLeft(row,column) {
    if (column!=min) { // check if it is not in the 0th column
        for (var i = (column - 1); i >= min; i--) {
            var tempId = row + "" + i;
            if ($('#' + tempId).html() != "") {
                var origVal = parseInt($('#' + row + "" + (i + 1)).html());
                var tempVal = parseInt($('#' + tempId).html());
                if (tempVal == origVal) {
                    if (changedIds.indexOf(tempId) == -1) {
                        changedIds.push(tempId);
                        $('#' + tempId).html(tempVal + origVal);
                        $('#' + (row+""+(i+1) ) ).html("");
                        isMoved = true;
                        score += tempVal + origVal;
                    }
                    break;
                }
            } else {
                $('#' + tempId).html($('#' + (row+""+(i+1) ) ).html());
                $('#' + (row+""+(i+1) )).html("");
                isMoved = true;
            }
        }
    }
}