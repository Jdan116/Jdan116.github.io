window.onload = function () {
    "use strict";

    const text_area = document.getElementById("text-area");
    const start_button = document.getElementById("start");
    const stop_button = document.getElementById('stop');
    const animation_options = document.getElementById('animation');
    const font_size = document.getElementById('fontsize');
    const turbo_button = document.getElementById('turbo');

    let animation_speed = 250;
    let animator;

    function clearTextArea() {
        text_area.innerHTML = "";
    }

    function setTextAreaWithAnimType(anim) {
        clearTextArea();
        text_area.innerHTML = anim;
    }

    const setAnimation = (animation_char) => {
        if (animation_char === "" || animation_char === null) return;

        //get the first animation from the animations characters
        const characters = animation_char.split("=====\n");
        clearInterval(animator)

        let count = 0
        animator = setInterval(() => {
            if (count >= characters.length) {
                count = 0
            }
            setTextAreaWithAnimType(characters[count])
            ++count;
        }, animation_speed);
    }

    animation_options.onchange = (e) => {
        clearTextArea();
        setTextAreaWithAnimType(ANIMATIONS[e.target.value])
    }

    start_button.onclick = (e) => {
        start_button.disabled = true;
        animation_options.disabled = true;
        stop_button.disabled = false;
        setAnimation(ANIMATIONS[animation_options.value])
    }

    stop_button.onclick = (e) => {
        stop_button.disabled = true;
        start_button.disabled = false;
        animation_options.disabled = false;
        clearInterval(animator)
        setTextAreaWithAnimType(ANIMATIONS[animation_options.value])
    }

    font_size.onchange = (e) => {
        if(e.target.value === "" || e.target.value === null) return;

        if(e.target.value === "Tiny") text_area.style.fontSize = "x-small";
        if(e.target.value === "Small") text_area.style.fontSize = "small";
        if(e.target.value === "Medium") text_area.style.fontSize = "small";
        if(e.target.value === "Large") text_area.style.fontSize = "large";
        if(e.target.value === "Extra Large") text_area.style.fontSize = "x-large";
        if(e.target.value === "XXL") text_area.style.fontSize = "xx-large";
    }

    turbo_button.onchange = (e) => {
        animation_speed = e.target.checked ? 50 : 250; 
        setAnimation(ANIMATIONS[animation_options.value]);
    }
}