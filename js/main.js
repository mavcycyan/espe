/**/
jQuery(document).ready(function($){	
    $(".modl1").fancybox({ 
        href: '#modal_1', 
        wrapCSS: 'modal_auth_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
    });
    $(".modl2").fancybox({ 
        href: '#modal_2', 
        wrapCSS: 'modal_auth_wp',
        minWidth: '100%',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
    });
});
/**/

/**/
    $('.h-txt .more').click(function(e){
        e.preventDefault();
        $('.h-txt-cont').toggleClass('active');
    });
    $('.modal-img a').mouseenter(function(){
        $('.modal-menu').addClass('hover');
        $('[data-for="'+$(this).attr('data-is')+'"]').addClass('hover');
        $('.modal_menu-img').attr('src', $('[data-for="'+$(this).attr('data-is')+'"]').attr('data-modl_img'));
    });
    $('.modal-img a').mouseleave(function(){
        $('.modal-menu').removeClass('hover');
        $('[data-for="'+$(this).attr('data-is')+'"]').removeClass('hover');
    });
    $('.modal-menu a').mouseenter(function(){
        $('.modal-img').addClass('hover');
        $('[data-is="'+$(this).attr('data-for')+'"]').addClass('hover');
        $('.modal_menu-img').attr('src', $(this).attr('data-modl_img'));
    });
    $('.modal-menu a').mouseleave(function(){
        $('.modal-img').removeClass('hover');
        $('[data-is="'+$(this).attr('data-for')+'"]').removeClass('hover');
    });
/**/