
jQuery(document).ready(function($){
    
    
    $.ajax(
        {
            url: "assets/data.json",
            dataType: "json"
        }
    ).done(
        function(msg){
            var enlaces = msg["enlaces"];
            enlaces.forEach(function(valor){
                
            });
        }
    )
    .fail(function(jqXHR, textStatus){
        alert(textStatus);
    });
    
});