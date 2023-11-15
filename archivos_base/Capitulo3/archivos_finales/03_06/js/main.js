var coleccion = new EnlacesCollection();
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
                var model = new Enlace(valor);
                coleccion.add(model);
            });
            var enlaceVista = new EnlaceVidew({el:$("header nav ul"), collection:coleccion});
        }
    )
    .fail(function(jqXHR, textStatus){
        alert(textStatus);
    });
    
});