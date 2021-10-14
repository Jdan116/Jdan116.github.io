$(function () {
    let isFinished = false;
    let isErrorOccurred = false;

    $("#start").click(function (e) {

        isFinished = false;
        isErrorOccurred = false;

        $('#status_msg').css("visibility", "hidden");
        $(".boundary").css("background-color", "#eeeeee");
        $("div.boundary").mouseenter(function () {

            console.log("mouseenter: " + isFinished)
            if (!isFinished) {
                isErrorOccurred = true;
                $(".boundary").css("background-color", "#f8c452");
                $('#status_msg').css("visibility", "visible").text('Sorry! You have lost the game.').css({
                    'text-align': 'center',
                    'color': 'red'
                });
            }
        });

        $("#end").mouseenter(function () {
            console.log("isErrorOccurred: " + isErrorOccurred)
            if (!isErrorOccurred) {
                isFinished = true;
                isErrorOccurred = false;
                $('#status_msg').css("visibility", "visible").text('Congratulations! You have won the game. Click S to start the game again.').css({
                    'text-align': 'center',
                    'color': 'green'
                });
            }
        });

        $("#maze").mouseleave(function () {
            console.log("mouseleave: " + isFinished)
            if (!isFinished) {
                $(".boundary").css("background-color", "#f8c452");
                $('#status_msg').css("visibility", "visible").text('Sorry! You have lost the game.').css({
                    'text-align': 'center',
                    'color': 'red'
                });
            }
        });
    });

});