$(document).ready(function () {
    init();
    $(".puzzlepiece").click(function () { return move($(this)) });
    $("#shufflebutton").click(shuffle);
    console.log(emptyBlock());

    updatePeices();
});


function isMovable(div) {

    var posleft = parseInt($(div).css("left"));
    var postop = parseInt($(div).css("top"));
    var emptyblock = emptyBlock().split(',');

    var topdiff = postop - emptyblock[0];
    var leftdiff = posleft - emptyblock[1];

    if (topdiff == 0 && Math.abs(leftdiff) == 100)
        return true;
    else if (Math.abs(topdiff) == 100 && leftdiff == 0)
        return true;
    else
        return false;


}

function move(div) {
    var posleft = parseInt($(div).css("left"));
    var postop = parseInt($(div).css("top"));
    var emptyblock = emptyBlock().split(',');
    //console.log("selected peice (top, left) = " + postop + " " + posleft);
    //console.log("empty peice (top, left) = " + emptyblock[0] + " " + emptyblock[1])

    if (isMovable($(div))) {
        $(div).css('top', emptyblock[0] + 'px');
        $(div).css('left', emptyblock[1] + 'px');
    }
    updatePeices();

}

function updatePeices() {
    for (var i = 1; i <= $("#puzzlearea").children().length; i++) {
        var div = $("#puzzlearea").children("div:nth-child(" + (i) + ")");
        if (isMovable($(div))) {
            $(div).addClass("movablepiece");
        }
        else
            $(div).removeClass("movablepiece");
    }
}

function emptyBlock() {
    var totalTop = 0;
    var totalLeft = 0;

    for (var i = 1; i <= $("#puzzlearea").children().length; i++) {
        var div = $("#puzzlearea").children("div:nth-child(" + (i) + ")");
        totalTop = totalTop + parseInt($(div).css("top"), 10);
        totalLeft = totalLeft + parseInt($(div).css("left"), 10);
        // console.log("after add\n" + totalTop + "\n" + totalLeft);
    }

    var eleft = 2400 - totalLeft;
    var etop = 2400 - totalTop;

    return etop + ',' + eleft;



}


init = function () {
    // initialize each piece
    for (var i = 0; i < $("#puzzlearea").children().length + 1; i++) {
        var div = $("#puzzlearea").children("div:nth-child(" + (i + 1) + ")");

        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        div.addClass("puzzlepiece");
        div.css("left", x + "px");
        div.css("top", y + 'px');
        div.css("backgroundImage", 'url("background.jpg")');
        div.css("backgroundPosition", -x + 'px ' + (-y) + 'px');
    }
};

function shuffle(){
    let piece=parseInt(Math.random() * 14);
    for (let c=0;c<200;c++){
        while (!isMovable($("#puzzlearea").children("div:nth-child(" + (piece) + ")"))){    
            piece=parseInt(Math.random() * 15);
        }
        piece=parseInt(Math.random() * 15);
        move($("#puzzlearea").children("div:nth-child(" + (piece) + ")"));
    }

}
