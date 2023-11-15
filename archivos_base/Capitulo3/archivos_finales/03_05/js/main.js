jQuery(document).ready(function($){
    $(".articulo h2").css({color:"#ff0000", fontSize:"16px"});
    $("header nav a").click(function(){
        alert($(this).html());
    });
    
    $.ajax(
        {
            url: "assets/data.json",
            dataType: "json"
        }
    ).done(
        function(msg){
            var enlaces = msg["enlaces"];
            enlaces.forEach(function(valor){
                $("header nav ul").append($("<li><a href='"+valor["url"]+"'>"+valor["label"]+"</a></li>"));
            });
            
            $("#menu").menu();
            
        }
    )
    .fail(function(jqXHR, textStatus){
        alert(textStatus);
    });
    
    $("#acordeon").accordion();
    
});