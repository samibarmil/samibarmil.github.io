
window.onload = function () {
    btnbigger.onclick = biggerText;
    ckbboldit.onchange = boldit;
}

function test() {

    let usrText = document.getElementById("text");
    alert(usrText.value);
    console.log("Hello");
}

function biggerText() {
    console.log(txtinput.style.fontSize);
    txtinput.style.textAlign = "right";
    txtinput.style.fontSize = parseInt(txtinput.style.fontSize) + 2 + "pt";
    boldit();


    setTimeout(biggerText, 550);
}

function boldit() {
    if (ckbboldit.checked == true) {
        txtinput.style.fontWeight = "bold";
        txtinput.style.color = "green";
        txtinput.style.textDecoration = "underline";
        txtinput.style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/dollars-cents-glyph/48/Sed-42-512.png)";
    }
    else {
        txtinput.style.fontWeight = "inherit";
        txtinput.style.color = "inherit";
        txtinput.style.textDecoration = "inherit";
        txtinput.style.backgroundImage = "url()";
    }
}

function Malkovitch() {
    var arrayOfWords = $("#txtinput").val().split(' ');


    for (i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length >= 5) {
            arrayOfWords[i] = "Malkovitch";
        }
    }
    txtinput.value = arrayOfWords.join(' ');
}
