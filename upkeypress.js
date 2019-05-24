function up() {
    changedIds = [];
    isMoved = false;
    for(var j=min;j<=max;j++) {
        for(var i=min;i<=max;i++) {
            if ($('#' + (i+""+j)).html() != "") {
                moveUp(i,j);
            }
        }
    }
    if (isMoved) {
        valuesMoved();
    }
    $('#score').html(score);
}
function moveUp(row,column) {
    if (row!=min) { 
        for (var i = (row - 1); i >=min; i--) {
            var tempId = i + "" + column;
            var origVal = parseInt($('#' + (i+1)+""+column).html());
            var tempVal = parseInt($('#' + tempId).html());
            if ($('#' + tempId).html() != "") {
                if (tempVal == origVal) {
                    if (changedIds.indexOf(tempId) == -1) {
                        changedIds.push(tempId);
                        $('#' + tempId).html(tempVal + origVal);
                        $('#' + ((i + 1) + "" + column)).html("");
                        isMoved = true;
                        score += tempVal + origVal;
                    }
                }
                break;
            } else {
                $('#' + tempId).html($('#' + ((i + 1) + "" + column)).html());
                $('#' + ((i + 1) + "" + column)).html("");
                isMoved = true;
            }
        }
    }
}