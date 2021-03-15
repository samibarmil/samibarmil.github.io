let  playing_speed = "250";
let isPlaying;

window.onload = function () {
    btnplay.onclick = play_anime;
    btnstop.onclick = stop_anime;
    ddlanimation.onchange = anime_content;
    ddlsize.onchange = change_size;
    ckbturbo.onchange = change_speed;
    change_size();
    change_speed();
    set_playing(false);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function set_playing(status) {
    if (status == true) {
        isPlaying = true;
        btnplay.disabled = true;
        btnstop.disabled = false;
        ddlanimation.disabled = true;
    }
    else {
        isPlaying = false;
        btnplay.disabled = false;
        btnstop.disabled = true;
        ddlanimation.disabled = false;
    }
}

async function play_anime() {
    set_playing(true);
    let frames = anime_content().split("=====\n");
    console.log("start playing");
    while (isPlaying) {
        for (frame of frames) {
            txtdisplay.value = frame;
            await sleep(playing_speed);
            if(!isPlaying)
                break;
        }
    }
}

function stop_anime() {
    set_playing(false);
    console.log("stop playing");
}

function change_speed() { 
    console.log("changing speed");
    if(ckbturbo.checked == true) {
        playing_speed = 50;
    }
    else playing_speed = 250;
}

function change_size() {
    console.log("changing size");
    let tiny = "7pt";
    let small = "10pt";
    let medium = "12pt";let large = "16pt";
    let extra_large = "24pt";
    let xxl = "32pt";

    switch (ddlsize.value) {
        case "tiny":
            console.log("tiny is choosen");
            txtdisplay.style.fontSize = tiny;
            break;
        case "small":
            txtdisplay.style.fontSize = small;
            break;
        case "medium":
            txtdisplay.style.fontSize = medium;
            break;
        case "large":
            txtdisplay.style.fontSize = large;
            break;
        case "extra_large":
            txtdisplay.style.fontSize = extra_large;
            break;
        case "xxl":
            txtdisplay.style.fontSize = xxl;
    }
}

function anime_content() {
    switch (ddlanimation.value) {
        case "blank":
            console.log("blank is choosen");
            txtdisplay.value = BLANK;
            break;
        case "exercise":
            txtdisplay.value = EXERCISE;
            break;
        case "juggler":
            txtdisplay.value = JUGGLER;
            break;
        case "bike":
            txtdisplay.value = BIKE;
            break;
        case "dive":
            txtdisplay.value = DIVE;
    }

    return txtdisplay.value;
}