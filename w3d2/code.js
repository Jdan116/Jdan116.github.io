$(document).ready(function () {

    const window_width = 700;
    const window_height = 300;

    $("#start").click(function () {

        $("#start").attr("disabled", true);

        //get the text values or set default value
        const circle_num_value = $("#circle_num").val();
        const max_circle = circle_num_value === "" || circle_num_value === null ? 0 : circle_num_value;

        const growth_amount_value = $("#growth_amount").val();
        const max_growth_amount = growth_amount_value === "" || growth_amount_value === null ? '10px' : growth_amount_value + 'px';

        const growth_rate_value = $("#growth_rate").val();
        const max_growth_rate = growth_rate_value === "" || growth_rate_value === null ? 250 : growth_rate_value;

        for (let i = 0; i < max_circle; ++i) {

            //create new random color for each element
            var rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            var color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] +
                            rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] +
                            rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];

            let left_position = Math.ceil(window_width * Math.random());
            let top_position = Math.ceil(window_height * Math.random())

            //create new element
            jQuery('<div>', {
                id: `${i}`,
                class: 'buble_class'
            }).css({
                'font-size': '10px',
                'width': '2px',
                'height': '3px',
                'border-radius': '60px',
                'margin': '10px',
                'left': `${left_position + "px"}`,
                'top': `${top_position + "px"}`,
                'position': 'absolute',
                'background-color': `${color}`
            }).appendTo('.buble_container')
        }


        //animate the the elements
        $('.buble_class').animate({
            'width': `+=${max_growth_amount}`,
            'height': `+=${max_growth_amount}`,
        }, 2500);
    });

    //remove the element onclick event
    $(document).on('click', 'div', function () {
        const id = $(this).attr('id');
        console.log(id);
        $(`#${id}`).fadeOut();
        // $(`#${id}`).remove()
    });


    $("#reset").click(function () {
        $("#circle_num").val("");
        $("#circle_width").val("");
        $("#growth_amount").val("");
        $("#growth_rate").val("");
        $(".buble_container").html("");
        $("#start").attr("disabled", false);
    });


});