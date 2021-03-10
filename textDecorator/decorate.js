


function test() {

    let usrText = document.getElementById("text");
    alert(usrText.value);
    console.log("Hello");
}

function biggerText() {
    let usrText = document.getElementById("text");
    console.log(usrText.style.fontSize);
    usrText.style.textAlign = "right";
    usrText.style.fontSize = parseInt(usrText.style.fontSize) + 2 + "pt";

    let usrCheck = document.getElementById("bling");
    if (usrCheck.checked == true) {
        usrText.style.fontWeight = "bold";
        usrText.style.color = "green";
        usrText.style.textDecoration = "underline";
        usrText.style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/dollars-cents-glyph/48/Sed-42-512.png)";
    }
    else {
        usrText.style.fontWeight = "inherit";
        usrText.style.color = "inherit";
        usrText.style.textDecoration = "inherit";
        usrText.style.backgroundImage = "url()";
    }

    // setTimeout(biggerText, 550);
}

function Malkovitch() {
    var arrayOfWords = $("#text").val().split(' ');


    for (i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length >= 5) {
            arrayOfWords[i] = " Malkovitch";
        }
    }
    text.value = arrayOfWords.join(' ');
    //console.log(arrayOfWords.join(' '));
}

function Igpay(text1) {
    var arrayOfWords = $("#text").val().split(' ');
    let consonant = /^[bcdfghjklmnpqrstvwxys]/gi, match, matches = [];

    for (i = 0; i < arrayOfWords.length; i++) {
        if (match = arrayOfWords[i].match(consonant)) {
            console.log(match[1]);
            matches.push(match[1]);
        }
    }
        // while (match = consonant.exec(text1)) {
        //     console.log(match[1]);
        //     matches.push(match[1]);
        // }

        //console.log(matches.join());
    }
