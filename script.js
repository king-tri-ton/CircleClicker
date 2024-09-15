var currentScore = parseInt($(".score").text(), 10),
    currentTimer = parseInt($(".timer").text(), 10),
    started = false,
    timer = null;

// Random number
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Increment current score
function incrementScore() {
    currentScore++;
    $(".score").html(currentScore);
}

// Move ball
function moveBall(selection) {
    var left = randomIntFromInterval(5, 85),
        top = randomIntFromInterval(5, 85),
        size = randomIntFromInterval(10, 20);
    $(selection).css({
        "left": left + "%",
        "top": top + "%",
        "width": size + "vw",
        "height": size + "vw"
    });
}

// Game ends
function endGame() {
    $(".ball").addClass("end").removeClass("start");
    $(".score").html("Игра завершена!<br/>Ваш счет: " + currentScore);
}

// Timer start
function timerStart() {
    timer = setInterval(function() {
        currentTimer--;
        $(".timer").html(currentTimer);
        if (currentTimer < 1) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// Ball clicked
$(".ball").click(function() {
    incrementScore();
    moveBall($(this));
});

// Ball clicked first time
$(".start").click(function() {
    if (!started) {
        started = true;
        timerStart();
        $(this).removeClass("start");
    }
});
