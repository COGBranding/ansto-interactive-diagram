 // Plugin Items collection
 var items = [
    // Text items
    {
        type: "text",
        title: "1. Transfer of waste from Mo-99 production",
        description: "The ILW is stored and characterised prior to introduction to the waste treatment facility.",
        position: {
            left: 1076,
            top: 445
        },
        picturePath: "./assets/synroc-step-graphic-1.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-1 first",
        sticky: true
    },
    {
        type: "text",
        title: "2. Addition of Synroc additives and drying",
        description: "The ILW is processed remotely within a hot cell and the tailored Synroc additives introduced and mixed with the waste. The liquid is converted into a granulated powder via a drying and calcination process.",
        position: {
            left: 675,
            top: 380
        },
        picturePath: "./assets/synroc-step-graphic-2.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-2 second",
        sticky: true
    },
    {
        type: "text",
        title: "3. Filling the canister",
        description: "The granulated waste powder is dispensed into a specially designed canister.",
        position: {
            left: 670,
            top: 505
        },
        picturePath: "./assets/synroc-step-graphic-3.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-3 third",
        sticky: true
    },
    {
        type: "text",
        title: "4. Hot isostatic pressing",
        description: "The canister is sealed and placed into a hot isostatic press where heat and pressure are applied to immobilise the waste.",
        position: {
            left: 110,
            top: 570
        },
        picturePath: "./assets/synroc-step-graphic-4.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-4 forth",
        sticky: true
    },
    {
        type: "text",
        title: "5. Durable compact wasteform",
        description: " The waste has now been treated into a durable, low-volume, product ready for final disposal and is transferred out of the waste treatment facility.",
        position: {
            left: 392,
            top: 385
        },
        picturePath: "./assets/synroc-step-graphic-5.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-5 fifth",
        sticky: true
    }
];


var mobile_items = [
    // Text items
    {
        type: "text",
        title: "1. Transfer of waste from Mo-99 production",
        description: "The ILW is stored and characterised prior to introduction to the waste treatment facility.",
        position: {
            left: 803,
            top: 327
        },
        picturePath: "./assets/synroc-step-graphic-mobile-1.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-1 first",
        sticky: true
    },
    {
        type: "text",
        title: "2. Addition of Synroc additives and drying",
        description: "The ILW is processed remotely within a hot cell and the tailored Synroc additives introduced and mixed with the waste. The liquid is converted into a granulated powder via a drying and calcination process.",
        position: {
            left: 500,
            top: 277
        },
        picturePath: "./assets/synroc-step-graphic-mobile-2.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-2 second",
        sticky: true
    },
    {
        type: "text",
        title: "3. Filling the canister",
        description: "The granulated waste powder is dispensed into a specially designed canister.",
        position: {
            left: 500,
            top: 375
        },
        picturePath: "./assets/synroc-step-graphic-mobile-3.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-3 third",
        sticky: true
    },
    {
        type: "text",
        title: "4. Hot isostatic pressing",
        description: "The canister is sealed and placed into a hot isostatic press where heat and pressure are applied to immobilise the waste.",
        position: {
            left: 85,
            top: 430
        },
        picturePath: "./assets/synroc-step-graphic-mobile-4.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-4 forth",
        sticky: true
    },
    {
        type: "text",
        title: "5. Durable compact wasteform",
        description: " The waste has now been treated into a durable, low-volume, product ready for final disposal and is transferred out of the waste treatment facility.",
        position: {
            left: 290,
            top: 285
        },
        picturePath: "./assets/synroc-step-graphic-mobile-5.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-5 fifth",
        sticky: true
    }
];

// Plugin configuration
var options = {
    debug: false,                                                 // Display console logs (default: false)
    allowHtml: true,                                             // Allow HTML markup inside items (default: false)
    shareBox: false,                                              // Display the social media share box (default: true)
    triggerEvent: 'click',                                       // Mouse event on the hotspots that triggers the display of items (default: hover)
};

// Plugin activation
$(document).ready(function() {
    if(window.outerWidth <=767) {
        $("#synroc-diagram-mobile").interactiveImage(mobile_items, options);
        $("#synroc-diagram-desktop").css('display', 'none');
        $("#synroc-diagram-mobile").css('display', 'block');
    }
    else{
        $("#synroc-diagram-desktop").interactiveImage(items, options);
        $("#synroc-diagram-mobile").css('display', 'none');
        $("#synroc-diagram-desktop").css('display', 'block');
    }
});

function reScale(){
    // $('div#synroc-diagram-desktop').css('transform-origin', 'top left');
    // $('div#synroc-diagram-desktop').css('transform', 'scale(' + ((window.parent.outerWidth/1280) /2 ) + ')');
    if(window.parent.outerWidth > 900 && window.parent.outerWidth < 1280) {
        $('div#synroc-diagram-desktop').css('transform-origin', 'top left');
        $('div#synroc-diagram-desktop').css('transform', 'scale(' + (((window.parent.outerWidth/1280) ) / 1.3 ) + ')');
    }
    if(window.parent.outerWidth > 767 && window.parent.outerWidth < 830) {
        $('div#synroc-diagram-desktop').css('transform-origin', 'top left');
        $('div#synroc-diagram-desktop').css('transform', 'scale(' + ((window.parent.outerWidth/1280) / 1.2 ) + ')');
    }
    if(window.parent.outerWidth > 830 && window.parent.outerWidth < 900) {
        $('div#synroc-diagram-desktop').css('transform-origin', 'top left');
        $('div#synroc-diagram-desktop').css('transform', 'scale(' + ((window.parent.outerWidth/1280)  / 1.3 ) + ')');
    }
}
$(parent).on('load', function(){
    reScale();
});


$(parent).on('resize', function(){
    console.log($(parent).closest(' .interactive-flow-diagram__iframe'));
    reScale();
    if(window.outerWidth <=767) {
        if(!$('#synroc-diagram-mobile .hotspot').length >= 1) {
            $("#synroc-diagram-mobile").interactiveImage(mobile_items, options);
            closeOthers();
        }
        if(!$('#synroc-diagram-mobile .visiblebox-1 .text-item .navigation').length >=1 ) {
            $('#synroc-diagram-mobile .text-item').append($('#synroc-diagram-desktop .navigation'));
        }
        $("#synroc-diagram-desktop").css('display', 'none');
        $("#synroc-diagram-mobile").css('display', 'block');
    }
    else{
        if($('#synroc-diagram-desktop .hotspot').length <=1) {
            $("#synroc-diagram-desktop").interactiveImage(items, options);
        }
        if($('#synroc-diagram-desktop .navigation').length <=1) {
            $('#synroc-diagram-desktop').append($('#synroc-diagram-mobile .visiblebox-1 .text-item .navigation').clone());
        }
        closeOthers();
        $("#synroc-diagram-mobile").css('display', 'none');
        $("#synroc-diagram-desktop").css('display', 'block');
    }
});

$(document).ready(function() {
    $('body').on('click', '.close-button', function () {
         $('.icon-radio-checked').removeClass('selected')
    })

    closeOthers();

    if(window.outerWidth <=767) {
        $('#synroc-diagram-mobile .text-item').append($('.navigation'));
    }
});

$("body").on('keydown', function(e) {
    if($('.active').css('display') == "block"){
        thiss = $('.active');
        var theClass = thiss.attr("class").match(/visiblebox[\w-]*\b/);
        classNo = parseInt(theClass[0].split("-")[1]);
         if(e.keyCode == 37) { // left
                moveLeft(classNo,  thiss);
          }
          else if(e.keyCode == 39) { // right
                moveRight(classNo, thiss);
          }   
    }else{
        if(e.keyCode == 37) {
            displayDefault()
        }
    }    
});

$(".left, .right").on('click', function(e) {
    if($('.active').css('display') == "block"){
        thiss = $('.active');
        var theClass = thiss.attr("class").match(/visiblebox[\w-]*\b/);
        classNo = parseInt(theClass[0].split("-")[1]);
        if($(this).hasClass('left')){
            if(window.outerWidth <=767) {
                moveRight(classNo, thiss)
            }
            else{
                moveLeft(classNo, thiss)
            }
        }
        if($(this).hasClass('right')){
            if(window.outerWidth <=767) {
                moveLeft(classNo, thiss)
            }
            else{
                moveRight(classNo, thiss)
            }
        }
    }else{
        displayDefault()
    }    
});

function displayDefault(){
    $('.visiblebox-1').css('display', 'block');  
    $('.visiblebox-1').addClass('active');
    $('.visiblebox-1').prev('.icon-radio-checked').addClass('selected');
}
function moveLeft(classNo, thiss){
    classNo = classNo + 1;
    classNo = classNo <=5?classNo:1
    displayActive(classNo, thiss)
}

function moveRight(classNo, thiss){
    classNo = classNo - 1;
    classNo = classNo >=1 ? classNo:5
    displayActive(classNo, thiss)
}   

function displayActive(classNo, thiss){
    cls = ".visiblebox-" + classNo;
    thiss.css('display', 'none');
    thiss.prev('.icon-radio-checked').removeClass('selected');
    $(cls).css('display', 'block');  
    thiss.removeClass('active');
    $(cls).addClass('active');
    $(cls).prev('.icon-radio-checked').addClass('selected');
}

function closeOthers(){
    $('.icon-radio-checked').on('click', function(){
        $('.icon-radio-checked').removeClass('selected');
        $('.close-button').click();
        $(this).addClass('selected');
        $(this).find('.active').css('display', 'block');
    })
}
