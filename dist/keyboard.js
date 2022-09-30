var console = {
    __on : {},
    addEventListener : function (name, callback) {
      this.__on[name] = (this.__on[name] || []).concat(callback);
      return this;
    },
    dispatchEvent : function (name, value) {
      this.__on[name] = (this.__on[name] || []);
      for (var i = 0, n = this.__on[name].length; i < n; i++) {
        this.__on[name][i].call(this, value);
      }
      return this;
    },
    log: function () {
      var a = [];
      // For V8 optimization
      for (var i = 0, n = arguments.length; i < n; i++) {
        a.push(arguments[i]);
      }
      this.dispatchEvent("log", a);
    }
  };

// Plugin Items collection
 var items = [
    // Text items
    {
        type: "text",
        title: "1. Transfer of waste from Mo-99 production",
        description: "The ILW is stored and characterised prior to introduction to the waste treatment facility.",
        position: {
            left: $('#first').offset().left,
            top: $('#first').offset().top
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
            left: $('#second').offset().left,
            top: $('#second').offset().top
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
            left: $('#third').offset().left,
            top: $('#third').offset().top
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
            left: $('#fourth').offset().left,
            top: $('#fourth').offset().top
        },
        picturePath: "./assets/synroc-step-graphic-4.jpg",
        customClassName: "synroc-diagram__hotspot visiblebox-4 fourth",
        sticky: true
    },
    {
        type: "text",
        title: "5. Durable compact wasteform",
        description: " The waste has now been treated into a durable, low-volume, product ready for final disposal and is transferred out of the waste treatment facility.",
        position: {
            left: $('#fifth').offset().left,
            top: $('#fifth').offset().top
        },
        picturePath: "./assets/synroc-step-graphic-5.jpg",
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
    $("#synroc-diagram").interactiveImage(items, options);    
    setTimeout(function() {
            reScale();
            reAlign();
            arrows();
            closeOthers();
            if(window.outerWidth <=767) {
                $('.item.behavior-sticky.synroc-diagram__hotspot').css('top', $('.interactive-image').height() - 80);
                if(!$('#synroc-diagram .visiblebox-1 .text-item .navigation').length >=1 ) {
                    $('#synroc-diagram .text-item').append($('#synroc-diagram .navigation'));
                }
            }
    }, 100);
    
});

var site_width = window.outerWidth;
$(window).on('resize', function(){
    document.body.style.zoom = 1.0
    $('body', 'html').css('height',$('.interactive-image').height());
    setTimeout(function() {
        if(window.outerWidth <=767) {
            $('.item.behavior-sticky.synroc-diagram__hotspot').css('top', $('.interactive-image').height());
            if(!$('#synroc-diagram .hotspot').length >= 1) {
                $("#synroc-diagram").interactiveImage(items, options);
                closeOthers();
            }
            if(!$('#synroc-diagram .visiblebox-1 .text-item .navigation').length >=1 ) {
                $('#synroc-diagram .text-item').append($('#synroc-diagram .navigation'));
            }
        }
        else{
            if(site_width > (window.outerWidth + 50) || site_width < (window.outerWidth - 50)){
                reAlign(); 
            }
            
            if($('#synroc-diagram .hotspot').length <=1) {
                $("#synroc-diagram").interactiveImage(items, options);
            }
            if($('#synroc-diagram .navigation').length <=5) {
                $('#synroc-diagram').append($('#synroc-diagram .visiblebox-1 .text-item .navigation').clone());
                $('#synroc-diagram .text-item .navigation').remove();
                $(".left, .right").unbind('click');
                arrows();
            }
            closeOthers();
        }
    }, 100);
});


$(document).ready(function() {
    $('body').on('click', '.close-button', function () {
         $('.icon-radio-checked').removeClass('selected')
    })

    closeOthers();
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
        if(e.keyCode <= 40 && e.keyCode >=37) {
            displayDefault()
        }
    }    
});
function arrows(){
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
}

function displayDefault(){
    $('.visiblebox-1').css('display', 'block');  
    $('.visiblebox-1').addClass('active');
    var active = $('.icon-radio-checked')[0];
    $(active).addClass('selected');    
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
    $('.icon-radio-checked').removeClass('selected');
    $(cls).css('display', 'block');  
    thiss.removeClass('active');
    $(cls).addClass('active');
    console.log(classNo);
    var active = $('.icon-radio-checked')[classNo - 1];
    $(active).addClass('selected');
}

function closeOthers(){
    $('.icon-radio-checked').on('click', function(){
        $('.icon-radio-checked').removeClass('selected');
        $('.close-button').click();
        $(this).addClass('selected');
        $(this).find('.active').css('display', 'block');
    })
}


function reScale(){
    console.log('here');

   
    $('#first').attr('data-for',$('.first').prev().attr('data-for'));
    $('#first').attr('class',$('.first').prev().attr('class'));
    $('.first').prev().remove();

    $('#second').attr('data-for',$('.second').prev().attr('data-for'));
    $('#second').attr('class',$('.second').prev().attr('class'));
    $('.second').prev().remove();
    
    $('#third').attr('data-for',$('.third').prev().attr('data-for'));
    $('#third').attr('class',$('.third').prev().attr('class'));
    $('.third').prev().remove();

    $('#fourth').attr('data-for',$('.fourth').prev().attr('data-for'));
    $('#fourth').attr('class',$('.fourth').prev().attr('class'));
    $('.fourth').prev().remove();

    $('#fifth').attr('data-for',$('.fifth').prev().attr('data-for'));
    $('#fifth').attr('class',$('.fifth').prev().attr('class'));
    $('.fifth').prev().remove();
}

function reAlign(){
    $('.first').css('left', $('#first').offset().left-400);
    $('.first').css('top', $('#first').offset().top-250);

    $('.second').css('left', $('#second').offset().left-400);
    $('.second').css('top', $('#second').offset().top-250);

    $('.third').css('left', $('#third').offset().left-400);
    $('.third').css('top', $('#third').offset().top-250);

    $('.fourth').css('left', $('#fourth').offset().left+100);
    $('.fourth').css('top', $('#fourth').offset().top-200);

    $('.fifth').css('left', $('#fifth').offset().left+50);
    $('.fifth').css('top', $('#fifth').offset().top-250);
}
