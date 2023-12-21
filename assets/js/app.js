var ourCustomers = $('.category_slider').flickity({
    freeScroll: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false
})

var notificationSlider = $('.notification .slider').flickity({
    wrapAround: true,
    pageDots: false,
    friction: 0.2,
})


var features_slider = $('.features_slider').flickity({
    freeScroll: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false
})




// $('.our_customers .prev_arrow').on('click', function () {
//   ourCustomers.flickity('previous');
// });
// // next
// $('.our_customers .next_arrow').on('click', function () {
//   ourCustomers.flickity('next');
// });


$('.product_list .sidebar .block .head').addClass('open')
$('.product_list .sidebar .block .head').slideDown(300);

$('.product_list .sidebar .block .head').click(function () {
    $(this).parent().find('.body').slideToggle(300)
    $(this).toggleClass('open')
})

$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});



// Product list filter 

$('.product_list .top_head .filter_btn, .product_list .sidebar .close_btn').click(function () {
    $('.product_list .sidebar').toggleClass('open')
})


// Nav menu


$('.site_header .toggle, .site_header .close_btn').click(function () {
    $('.site_header .toggle').toggleClass('opened')
    $('.site_header .navbar').toggleClass('opened')
    $('body').toggleClass('noScroll')
    $('html').toggleClass('noScroll')
    $('.navbar_menu').toggleClass('opened')
})
$(document).click(function (e) {
    if ($(e.target).is('.navbar_menu.opened')) {
        $('.navbar_menu').removeClass('opened')
        $('body').removeClass('noScroll')
        $('html').removeClass('noScroll')
        $('.site_header .toggle').removeClass('opened')

    }

});



var mainGallery = $('.mainGallery .carousel').flickity({
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    pageDots: false,
})


var navGallery = $('.navGallery .carousel').flickity({
    freeScroll: true,
    contain: true,
    asNavFor: ".carousel-main",
    pageDots: false,
    prevNextButtons: false,
    cellAlign: 'left'
})



$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function () {
    $(this).next().removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    // $(activeTab).fadeIn();
    $(activeTab).show()
});


// Read more
$('.readMore_btn').click(function () {
    $(this).parent().find('.more_text').slideToggle();
    // $('.more_text').slideToggle();
    if ($(this).text() == "Devamını Oku") {
        $(this).text("Daha Az Göster")
    } else {
        $(this).text("Devamını Oku")
    }
});
$('.more_text').hide()



$('.size_chart .close_btn').click(function () {
    $('.size_chart  ').toggleClass('opened')
})


$(document).click(function (e) {
    if ($(e.target).is('.modal.opened')) {
        $('.modal').removeClass('opened')
    }
});





// reference from https://www.digitalocean.com/community/tutorials/js-tabs

const tabs = document.querySelectorAll(".tab");

function tabify(tab) {
    const tabList = tab.querySelector(".tab__list");

    if (tabList) {
        const tabItems = [...tabList.children];
        const tabContent = tab.querySelector(".tab__content");
        const tabContentItems = [...tabContent.children];
        let tabIndex = 0;

        tabIndex = tabItems.findIndex((item, index) => {
            return [...item.classList].indexOf("is--active") > -1;
        });

        tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0);

        function setTab(index) {
            tabItems.forEach((x, index) => x.classList.remove("is--active"));
            tabContentItems.forEach((x, index) => x.classList.remove("is--active"));

            tabItems[index].classList.add("is--active");
            tabContentItems[index].classList.add("is--active");
        }

        tabItems.forEach((x, index) =>
            x.addEventListener("click", () => setTab(index))
        );
        setTab(tabIndex);
        tab.querySelectorAll(".tab").forEach((tabContent) => tabify(tabContent));
    }
}

tabs.forEach(tabify);




$('.product_customization .selected_colors .top .arrow').click(function () {
    $(this).parents().eq(02).find('.selected').slideToggle()
    $(this).parent().toggleClass('opened')
})


$('.product_designApp .sidebar_btn').click(function () {
    $('.product_designApp .sidebar').toggleClass('opened')
})



$(function () {
    var action;
    $(".number-spinner button").mousedown(function () {
        btn = $(this);
        input = btn.closest('.number-spinner').find('input');
        btn.closest('.number-spinner').find('button').prop("disabled", false);

        if (btn.attr('data-dir') == 'up') {
            action = setInterval(function () {
                if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                    input.val(parseInt(input.val()) + 1);
                } else {
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
        } else {
            action = setInterval(function () {
                if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                    input.val(parseInt(input.val()) - 1);
                } else {
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
        }
    }).mouseup(function () {
        clearInterval(action);
    });
});





$('.product_list .sidebar .block .head').addClass('open')
$('.product_list .sidebar .block .head').slideDown(300);

$('.OrderContentDetails .head').click(function () {
    $(this).parent().find('.body').slideToggle(300)
    $(this).toggleClass('open')
})