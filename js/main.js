/**/
jQuery(document).ready(function($){	
    $(".modl1").fancybox({ 
        href: '#modal_1', 
        wrapCSS: 'modal_auth_wp',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
    });
    $(".modl2").fancybox({ 
        href: '#modal_2', 
        wrapCSS: 'modal_auth_wp',
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0]
    });
});
/**/

/**/
    function imgDisplay(menuEl){
        var par = menuEl.closest('.modal-menu-itm');
        if( (par.index()%2) == 0 ){
            $('.modal_menu-img').removeClass('right');
            $('.modal_menu-img').addClass('left');
        }    
        else {
            $('.modal_menu-img').removeClass('left');
            $('.modal_menu-img').addClass('right');
        }    
    }

    $('.modal-img a').mouseenter(function(){
        $('.modal-menu').addClass('hover');
        $('[data-for="'+$(this).attr('data-is')+'"]').addClass('hover');
        imgDisplay($('[data-for="'+$(this).attr('data-is')+'"]'));
        $('.modal_menu-img img').attr('src', $('[data-for="'+$(this).attr('data-is')+'"]').attr('data-modl_img'));
    });
    $('.modal-img a').mouseleave(function(){
        $('.modal-menu').removeClass('hover');
        $('[data-for="'+$(this).attr('data-is')+'"]').removeClass('hover');
    });
    $('.modal-menu a').mouseenter(function(){
        $('.modal-img').addClass('hover');
        $('[data-is="'+$(this).attr('data-for')+'"]').addClass('hover');
        $('.modal_menu-img img').attr('src', $(this).attr('data-modl_img'));
    });
    $('.modal-menu a').mouseleave(function(){
        $('.modal-img').removeClass('hover');
        imgDisplay($(this));
        $('[data-is="'+$(this).attr('data-for')+'"]').removeClass('hover');
    });
/**/