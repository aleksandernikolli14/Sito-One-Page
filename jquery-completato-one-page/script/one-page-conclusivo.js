$(function(){

    $("nav a").click(function(event){
        event.preventDefault();
        var linkScelto=$(this);
        console.log(linkScelto);
        console.log(this.hash);
        var divCorrelato=$(this.hash);
        console.log(divCorrelato);

        var distanzaSu=divCorrelato.offset().top;
        console.log(distanzaSu);

        //$("html,body").scrollTop(distanzaSu);

        $("html,body")
            .stop()
            .animate({scrollTop:distanzaSu},1000);


    }); //$("nav a").click


    $("#tornaSu").click(function(){
        $("html,body").stop().animate({scrollTop:0},1000);
    });


    $(document).scroll(function(){
        //console.log("Stai facendo scroll");
        console.log($(document).scrollTop());

        if($(document).scrollTop()>500){
            //$("#tornaSu").css("bottom","50px");
            $("#tornaSu").stop().animate({bottom:50},500);
        }
        else{
            $("#tornaSu").stop().animate({"bottom":"-100px"},500);
        }


    })


});//.ready