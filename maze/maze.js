let started = false;


$(document).ready(function () {

    let boundary = $(".boundary");

    $("#start").click(function () {
        started = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Don't touch the boundaries");
    });

    $(".boundary").hover(lose);

    $("#maze").hover(function () { }, lose);

    $("#end").hover(function () {
        if (started) {
            reset();
            $("#status").text("You won!");

        }
    });

});

function reset() {
    started = false;
    $("#status").text("Click the \"S\" to begin.");
}

function lose() {
    if (started) {
        $(".boundary").addClass("youlose")
        reset();
        started = false;
    }
}