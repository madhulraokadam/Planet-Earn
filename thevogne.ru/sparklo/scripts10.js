function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}



/** MATTER */
let screenWidth = window.innerWidth;
let pageHeight = window.innerHeight;

let coefw;
coefw = screenWidth / 1200;
if (screenWidth > 992) {
    coefw = screenWidth / 1200;
} else if (screenWidth > 495) {
    coefw = screenWidth / 820;
} else {
    coefw = screenWidth / 580;
}






let linknews;




window.addEventListener('DOMContentLoaded', () => {

    if (screenWidth > 991) {

        $(".open-mo-pop").click(function(e) {

            e.preventDefault();
            linknews = $(this).attr('href') + ' #content';
            $("#barba-wrapper").load(linknews);
            $(this).tap()

        });
    } else {
        $(".open-mo-pop").mouseenter(function() {
            // e.preventDefault();
            linknews = $(this).attr('href') + ' #content';
            $("#barba-wrapper").load(linknews);
            //$(this).tap()
        })


        $(".open-mo-pop").click(function(e) {
            e.preventDefault();
        })
    }

    $('html').addClass("resized");
    stykfix();
    $('body').removeClass('animated-show-active')

    $('body').addClass("bodyready");






});

window.addEventListener('load', () => {
    $('body').addClass("bodyready");



    let hegs = $('.pbs').text();
    let bggs = $('.pbs').css("background-color");



    stykfix();



    switch (location.pathname) {


        case '/legal-privacy':

            $('#page-bage').text('Legal & privacy');
            $('#page-bage').parent().css({
                "background-color": "#6f71f4"
            });

            $('.shadow-block').css({
                "background-color": "#6f71f4"
            });

            $('.navbar').addClass("bluemenu");


            setTimeout(function() {
                pinkerobserver();
                $("html").removeClass("ovfs");
            }, 200);

            break;


        case '/product':


            $('#page-bage').text(hegs);
            $('#page-bage').parent().css({
                "background-color": bggs
            });

            $('.shadow-block').css({
                "background-color": bggs
            });

            $('.navbar').addClass("bluemenu");


            setTimeout(function() {
                pinkerobserver();
                $("html").removeClass("ovfs");
            }, 200);

            break;


        case '/partners':


            $('#page-bage').text(hegs);
            $('#page-bage').parent().css({
                "background-color": bggs
            });
            $('.shadow-block').css({
                "background-color": bggs
            });

            $('.navbar').addClass("bluemenu");
            setTimeout(function() {
                pinkerobserver();
                $("html").removeClass("ovfs");
            }, 200);
            break;

        case '/company':

            $('#page-bage').text(hegs);
            $('#page-bage').parent().css({
                "background-color": bggs
            });

            $('.shadow-block').css({
                "background-color": bggs
            });

            $('.navbar').addClass("bluemenu");
            setTimeout(function() {
                pinkerobserver();
                $("html").removeClass("ovfs");
            }, 200);
            break;

        default:
            $('.navbar').addClass("bluemenu");
            $('.page-bage').css({
                "display": "none"
            });
            // metter = MatterScene.create();
            pinkerobserver();


            setTimeout(function() {
                //    metter.setup();
                $("html").removeClass("ovfs");
            }, 2500);


            break;
    }


});





$(window).on('load', function() {


    $(".page-bage").click(function() {
        $(window).scrollTop(0);
    });


    $(".open-pop").click(function() {

        console.log("chchc");


        setTimeout(function() {
            $("html").addClass("ovfs");
        }, 100);
    });




    $(".menu-link-big.no-barba-copy._5").click(function() {
        $(".menu-button").click();

        setTimeout(function() {
            $("html").removeClass("ovfs");
        }, 100);
    });

    $(".menu-button,.open-mo-pop").click(function() {
        // $("html").addClass("ovfs"); 
        setTimeout(function() {
            $("html").addClass("ovfs");
        }, 100);
    });

    $(".close-pop-news-btn,.close-pop-news,.close-menu-btn,.close-pop,.menuer-inn").click(function() {
        // $("html").removeClass("ovfs");
        setTimeout(function() {
            $("html").removeClass("ovfs");
        }, 100);
    });




});










setTimeout(function() {

    if ($("iframe").length) {

        pinker();
        scrollout();

    }
}, 2000);

console.log('Started');









let higer;


function stykfix() {

    console.log('stykfix');
    let reziejor;
    let reziejorsumm;

    $(".div-block-14").each(function() {
        reziejor = $(this).height();
        higer = $(this).children(".div-block-15").next().height();
        $(this).children(".div-block-15").height(higer);
        reziejorsumm = reziejor - higer + 'px';
        if ($(this).hasClass('nda')) {


            console.log(reziejorsumm)
            // $('.div-block-71').css({"bottom":reziejorsumm});
        }





        if ($(this).hasClass("bluemenu")) {
            $(this).height(higer - pageHeight);
        } else {
            $(this).height(higer + pageHeight);
        }

    });


}


function scrollout() {

    // get the header element
    const header = document.querySelector('.navbar');


    // add scroll event listener to window object
    window.addEventListener('scroll', () => {

        console.log("ww")


    });



    document.querySelectorAll('.scrolls').forEach((trigger) => {
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {




                    }
                });
            }, {
                threshold: 0.5,
            }
        ).observe(trigger);
    });



    document.querySelectorAll('.scrolls').forEach((trigger) => {
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {
                        //if (entry.target).hasClass("whmenu"){console.log('whmenu')}



                    }
                });
            }, {
                threshold: 1,
            }
        ).observe(trigger);
    });




}

function pinkerobserver() {

    document.querySelectorAll('.inn-span').forEach((trigger) => {
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {





                        $(entry.target).addClass("active");


                    }
                });
            }, {
                threshold: 1,
            }
        ).observe(trigger);
    });

    document.querySelectorAll('.pinker').forEach((trigger) => {
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {





                        $(entry.target).addClass("active");


                    }
                });
            }, {
                threshold: 1,
            }
        ).observe(trigger);
    });
}

function pinker() {

    $(".pinker").each(function() {
        if ($(this).hasClass('_1')) {
            $(this).append(
                '<svg width="447" height="31" viewBox="0 0 447 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77463 15.6854C88.499 7.59196 266.034 2.96543 438.497 21.7406" stroke="#FE90E7" stroke-width="17" stroke-linecap="round"/></svg>'

            );
        } else if ($(this).hasClass('_2')) {
            $(this).append(
                '<svg width="536" height="33" viewBox="0 0 536 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00212 24.241C104.788 12.3176 318.678 0.942056 527.484 16.2525" stroke="#FE90E7" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_3')) {
            $(this).append(
                '<svg width="754" height="39" viewBox="0 0 754 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99989 29.5306C145.818 9.96775 450.064 -5.4341 744.876 28.5214" stroke="#FE90E7" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_4')) {
            $(this).append(
                '<svg width="508" height="39" viewBox="0 0 508 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00031 29.9589C100.8 15.5081 327.41 -5.68279 499.445 25.1593" stroke="#FE90E7" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_5')) {
            $(this).append(
                '<svg width="286" height="32" viewBox="0 0 286 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99976 23.1887C57.9678 11.4054 169.795 -0.221765 276.621 21.4787" stroke="#FE90E7" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_6')) {
            $(this).append(
                '<svg width="620" height="37" viewBox="0 0 620 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99994 27.9669C121.454 13.9558 399.276 -6.14327 610.932 25.5491" stroke="#FE90E7" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_7')) {
            $(this).append(
                '<svg width="398" height="36" viewBox="0 0 398 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99917 27.0902C79.7849 13.048 236.897 -0.0775356 388.622 18.6889" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_8')) {
            $(this).append(
                '<svg width="358" height="39" viewBox="0 0 358 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.40837 30.3248C73.2586 13.9333 214.25 -1.83773 349.141 18.8507" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_9')) {
            $(this).append(
                '<svg width="696" height="41" viewBox="0 0 696 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 32.266C135.661 13.5657 387.5 -2.04846 687.499 20.4515" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_10')) {
            $(this).append(
                '<svg width="556" height="34" viewBox="0 0 556 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68983 25.2746C110.249 8.88344 310.695 -2.23038 546.644 25.4577" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_11')) {
            $(this).append(
                '<svg width="330" height="32" viewBox="0 0 330 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.87857 22.903C68.6896 10.2023 185.51 1.16645 320.665 21.3066" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_12')) {
            $(this).append(
                '<svg width="524" height="40" viewBox="0 0 524 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.05919 18.0952C104.436 6.6315 292.762 2.06042 514.604 31.3403" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_13')) {
            $(this).append(
                '<svg width="606" height="35" viewBox="0 0 606 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.90043 25.3057C119.368 9.1875 338.025 -1.65753 596.62 25.8286" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_14')) {
            $(this).append(
                '<svg width="427" height="36" viewBox="0 0 427 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.34058 26.7967C87.6754 10.0697 240.844 -2.16284 418.38 23.333" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_15')) {
            $(this).append(
                '<svg width="811" height="43" viewBox="0 0 811 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00102 34.0566C157.203 12.1932 451.563 -5.20847 801.623 23.7413" stroke="#FF987A" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_16')) {
            $(this).append(
                '<svg width="590" height="34" viewBox="0 0 590 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99899 23.5307C115.27 9.51814 351.677 -0.889525 580.908 25.1232" stroke="#88DBDF" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        } else if ($(this).hasClass('_17')) {
            $(this).append(
                '<svg width="449" height="33" viewBox="0 0 449 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99917 24.0902C89.2757 10.8222 267.654 -0.56856 440.265 19.9016" stroke="#88DBDF" stroke-width="17" stroke-linecap="round"/></svg>'
            );
        }




    });

}

window.addEventListener('resize', function(event) {

    pageHeight = window.innerHeight;
    $(".div-block-14").each(function() {
        higer = $(this).children(".div-block-15").next().height();
        $(this).children(".div-block-15").height(higer);

        if ($(this).hasClass("bluemenu")) {
            $(this).height(higer - pageHeight);
        } else {
            $(this).height(higer + pageHeight);
        }

    });
});