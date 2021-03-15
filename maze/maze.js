$(document).ready(function () {

    let boundary = $(".boundary");
    let started = false;

    $("#start").click(function () {
        started = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Don't touch the boundaries");
    })

    $(".boundary").hover(function () {
        if (started) {
            $(".boundary").addClass("youlose")
            reset();
            started = false;
        }
    });

    $("#maze").hover(function () { }, function () {
        if (started) {
            $(".boundary").addClass("youlose")
            reset();
            started = false;
        }
    })

    $("#end").hover(function () {
        if (started) {
            reset();
            $("#status").text("You won!");

        }
    })

});

function reset() {
    started = false;
    $("#status").text("Click the \"S\" to begin.");
}