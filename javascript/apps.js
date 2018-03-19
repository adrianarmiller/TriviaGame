$(document).ready(function() {
    //create object with question to array of answers

    const question1 = {
        question:"question1",
        answers:["answer1", "answer2", "answer3", "answer4"],
        correctAnswer:"answer1",
    }

    const question2 = {
        question:"question2",
        answers:["answer1", "answer2", "answer3", "answer4"],
        correctAnswer:"answer3",
    }

    const question3 = {
        question:"question3",
        answers:["answer1", "answer2", "answer3", "answer4"],
        correctAnswer:"answer3",
    }

    const question4 = {
        question:"question4",
        answers:["answer1", "answer2", "answer3", "answer4"],
        correctAnswer:"answer2",
    }


    let correctCounter = 0;
    let incorrectCounter = 0;
    let unansweredCounter = 0;

    $("#start").click(function(){
        $("#start").remove();
        playQuestion1();
    });

    function displayAnswerOptions(array){
        for(i = 0; i<array.length; i++){
            let theQ = $("<button>");
            theQ.text(array[i]);
            theQ.addClass("answers-btn");
            theQ.attr("id", i);
            $("#display-answers").append(theQ);
        }
    }

    function startTimer() {
        let timer;
        let timeRemaining = 30;
        $("#display-time-remaining").text("Time remaining: "+timeRemaining);
        timer = setInterval(function() {  
        $("#display-time-remaining").text("Time remaining: "+timeRemaining);
        if (timeRemaining === 0) {
            clearInterval(timer);
        } 
        else{
        timeRemaining--;
        }
    }, 1000);
}


    function playQuestion1(){
        $("#display-time-remaining").empty();
        $("#display-question").text(question1.question);
        displayAnswerOptions(question1.answers);

        startTimer();

        $("#0").click(function(){
            //CORRECT
            correctCounter++;
            $("#display-answers").empty();

        });

        $("#1").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#2").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#3").click(function(){
            //NOPE
            displayCorrect();
        });

        function displayCorrect(){
            incorrectCounter++;
            $("#display-answers").empty();
            $("#yes-no-time").text("The correct answer is: " +question1.correctAnswer);
            playQuestion2();

        }
    }

    function playQuestion2(){
        $("#display-time-remaining").empty();
        $("#yes-no-time").empty();
        $("#display-question").text(question2.question);
        displayAnswerOptions(question2.answers);

        startTimer();

        $("#0").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#1").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#2").click(function(){
            //CORRECT
            correctCounter++;
            $("#display-answers").empty();
        });

        $("#3").click(function(){
            //NOPE
            displayCorrect();
        });

        function displayCorrect(){
            incorrectCounter++;
            $("#display-answers").empty();
            $("#yes-no-time").text("The correct answer is: " +question2.correctAnswer);
            playQuestion3();
        }
    }

    function playQuestion3(){
        $("#display-time-remaining").empty();
        $("#yes-no-time").empty();
        $("#display-question").text(question3.question);
        displayAnswerOptions(question3.answers);

        startTimer();

        $("#0").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#1").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#2").click(function(){
            correctCounter++;
            $("#display-answers").empty();
        });

        $("#3").click(function(){
            //NOPE
            displayCorrect();
        });

        function displayCorrect(){
            incorrectCounter++;
            $("#display-answers").empty();
            $("#yes-no-time").text("The correct answer is: " +question3.correctAnswer);
            playQuestion4();
        }
    }

    function playQuestion4(){
        $("#display-time-remaining").empty();
        $("#yes-no-time").empty();
        $("#display-question").text(question4.question);
        displayAnswerOptions(question4.answers);

        startTimer();

        $("#0").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#1").click(function(){
            //CORRECT
            correctCounter++;
            $("#display-answers").empty();
            $("#yes-no-time").text("You got it!");
        });

        $("#2").click(function(){
            //NOPE
            displayCorrect();
        });

        $("#3").click(function(){
            //NOPE
            displayCorrect();
        });

        function displayCorrect(){
            incorrectCounter++;
            $("#display-answers").empty();
            $("#yes-no-time").text("The correct answer is: " +question3.correctAnswer);
            endGame();
        }
    }

    function endGame(){
        $("#display-answers").empty();
        //FIN
        //correct
        //incorrect

    }


});