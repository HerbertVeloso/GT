$(".menu__bars").click(function() {
    if($(".menu__items").hasClass("open")) {
        $(".menu__items").hide(400).removeClass("open");
    }
    else {
        $(".menu__items").show(400).addClass("open");
    }
});

//FUNÇÃO CLICAR LINK DO MENU E ESCONDER
window.onresize=function() {
    getDimensions();
}
function getDimensions() {
    var largura = window.innerWidth;
    if(largura <= 768){
        $(".menu__items").hide(0).removeClass("open");
        $(".menu__link").click(function() {
            $(".menu__items").hide(400).removeClass("open");
        });
    }
    else{
        $(".menu__items").show(0);
        $(".menu__link").click(function() {
            $(".menu__items").show(0).addClass("open");
        });
    }; 
}
getDimensions();