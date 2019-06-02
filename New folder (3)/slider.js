var max = $(".slider").children().length;
 let width_slide = 100*max +"%";
 let width_item = 100/max + "%";



 $(".slider").width(width_slide);
 $(".slider .item").width(width_item);
 
 


 let max_right=max-1;
 let count = 0;
 $(".right").click(function() {
    if (count < max_right) {
        count++;
        hideLeftRight(count);
        var left = count * 100;
        $(".slider").animate({ left: "-" + left + "%" })
    }
})

$(".left").click(function() {
    if (count > 0) {
        count--;
        hideLeftRight(count);
        var left = count * 100;
        $(".slider").animate({ left: "-" + left + "%" })
    }
})
function hideLeftRight(c) {
    switch (c) {
        case 0:
            $(".left").hide();
            break;
        case max_right:
            $(".right").hide();
            break;
        default:
            $(".left").show();
            $(".right").show();
    }
}