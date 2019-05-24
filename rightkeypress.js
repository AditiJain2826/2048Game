function right(){
    isMoved=false;
    changedIds=[];
    for(var i=min;i<=max;i++){
        for(var j=max;j>=min;j--) {
            if($('#'+(i+""+j)).html!=""){
                moveRight(i,j);
            }
        }
    }
    if(isMoved){
        valuesMoved();
    }
}

function moveRight(row,column){
    if(column!=max){
        for(var i=(column+1);i<=max;i++){
            var tempId=row+""+i;
            if ($('#' + tempId).html() != "") {
                var tempVal=parseInt($('#'+tempId).html());
                var origVal=parseInt($('#'+row+""+(i-1)).html());
                if(tempVal==origVal){

                    if (changedIds.indexOf(tempId) == -1) {
                        changedIds.push(tempId);
                        $('#' + tempId).html(tempVal + origVal);
                        $('#'+ row + "" + (i-1) ).html("");
                        isMoved = true;
                        score += tempVal + origVal;
                    }
                }
                break;
            }else{
                $('#'+tempId).html($('#'+(row+""+(i-1))).html());
                $('#'+(row+""+(i-1))).html("");
                isMoved=true;
            }
        }
    }
}