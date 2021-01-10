$(document).ready(function(){
    $('.slider__big-img, .slider__small-img').slick({
        autoplay: true,
        lazyLoad: 'ondemand',
        autoplaySpeed: 5000,
        adaptiveHeight:true,
        arrows: false,
    });


    $('.slider-product').slick({
        lazyLoad: 'ondemand',
        adaptiveHeight:true,
        arrows: false,
        slidesToShow: 4,
        initialSlide: 5,
    });


    $('.button-tab-prev').click(function (event) {
        $('.slider-product').slick('slickPrev');
    });
    $('.button-tab-next').click(function (event) {
        $('.slider-product').slick('slickNext');
    });

    // $('.slider-product').get(0).slick.setPosition();

    $('.product').each(function () {
        var $tabBlock = $('.slider-product', this);
        var $tabBtn = $('.product__tabs a', this);       
        

        $tabBtn.click(function () {
            $tabBlock.eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
            return false;
        }).eq(0).click(); 
                
    });
    
    // $(".slider-product").slick('reinit');

});

        // $('a[data-toggle="tab"]').on('tab', function (e) {
        //     // Находим селектор таба, который будет сейчас показан
        //     var hash = $(e.target).attr("href");
        //     // И вызываем заветную функцию
        //     $(hash + '.product').slick('setPosition', 0);
        //  });

    
        
    

    


    // $('.product__tabs-link').on('click', function () {
    //     if($(this).hasClass('active')){
    //         return;
    //     }
    //     $('.product__tabs-link').removeClass('active');
    //     $(this).addClass('active');
    //     var item_attr = $(this).attr('data-id');
    //     $('.slider-product').css('display', 'none');

    //     $('.slider-product').each(function () {
    //         var attr_slider = $(this).attr('data-slider');
    //         if(item_attr==attr_slider){
    //             $(this).css('display', 'block');
    //             $(this).slick('reinit');

    //         };
    //     });
    // });



