//check of specific todo by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    /*console.log($(this).css("color"));
    if($(this).css("color") == "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else{
        $(this).css({
                color: "gray",
                textDecoration: "line-through"
            });
    }
    */
});

//click on x to detele todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); //do with li not span
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //which is keypress = enter
       var todoText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" +" "+todoText +"</li>");
       
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
