var aboutQuestion = document.getElementById("aboutQuestion");
var aboutAnswer1 = document.getElementById("aboutAnswer1");
var aboutAnswer2 = document.getElementById("aboutAnswer2");
var aboutAnswer3 = document.getElementById("aboutAnswer3");
var aboutAnswer4 = document.getElementById("aboutAnswer4");
var aboutAnswer5 = document.getElementById("aboutAnswer5");
var aboutAnswer6 = document.getElementById("aboutAnswer6");
var lastInput = document.getElementById("lastInput");

var aboutQuestionText = "Who Am I ?";
var aboutAnswerText1 = "Website for Developers in GARINASSET.COM .";
var aboutAnswerText2 = "What We Have Done and Are Doing :";
var aboutAnswerText3 = " * GARINASSET.COM";
var aboutAnswerText4 = " * WWW.GARINASSET.COM";
var aboutAnswerText5 = " * etc···";
var aboutAnswerText6 = "We Will Do More Great Things in The Future !";

generateText(aboutQuestionText, aboutQuestion, function () {
    generateText(aboutAnswerText1, aboutAnswer1, function () {
        generateText(aboutAnswerText2, aboutAnswer2, function () {
            generateText(aboutAnswerText3, aboutAnswer3, function () {
                generateText(aboutAnswerText4, aboutAnswer4, function () {
                    generateText(aboutAnswerText5, aboutAnswer5, function () {
                        generateText(aboutAnswerText6, aboutAnswer6, function () {
                            lastInput.style.display = "block";
                        });
                    });
                });
            });
        });
    });
});

function generateText(text, element, callback) {
    var i = 0;

    var timer = setInterval(function () {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) {
                callback();
            }
        }
    }, 20);
}
