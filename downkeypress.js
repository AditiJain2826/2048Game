function down() {
    changedIds = [];
    isMoved = false;
    for (var i = min; i <= max; i++) {
        for (var j = max; j >= min; j--) {
            if ($('#' + (j+""+i)).html() != "") {
                moveDown(j,i);
            }
        }
    }
    if (isMoved) {
        valuesMoved();
    }
    $('#score').html(score);
}
function moveDown(row,column) {
    if (row!=max) {
        for (var i = row + 1; i <= max; i++) {
            var tempId = i + "" + column;
            var origVal = parseInt($('#' + (i-1)+""+column).html());
            var tempVal = parseInt($('#' + tempId).html());
            if ($('#' + tempId).html() != "") {
                if (tempVal == origVal) {
                    if (changedIds.indexOf(tempId) == -1) {
                        changedIds.push(tempId);
                        $('#' + tempId).html(tempVal + origVal);
                        $('#' + ((i - 1) + "" + column)).html("");
                        isMoved = true;
                        score += tempVal + origVal;
                    }
                }
                break;
            } else {
                $('#' + tempId).html($('#' + ((i - 1) + "" + column)).html());
                $('#' + ((i - 1) + "" + column)).html("");
                isMoved = true;
            }
        }
    }
}